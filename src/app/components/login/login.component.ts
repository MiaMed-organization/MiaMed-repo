import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { Observer } from 'rxjs';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', Validators.required],
    clarificationText: [false, Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private msgService: MessageService,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(document.body, 'background', 'url("../../../assets/images/bg_miamed.jpeg")');
    this.renderer.setStyle(document.body, 'background-size', 'cover');
    this.renderer.setStyle(document.body, 'background-repeat', 'no-repeat');
    this.renderer.setStyle(document.body, 'background-attachment', 'fixed');
   }

  get userName() {
    return this.loginForm.controls['userName'];
  }
  get password() { return this.loginForm.controls['password']; }

  get clarificationText() { return this.loginForm.controls['clarificationText']; }


  loginUser() {
    const { userName, password, clarificationText } = this.loginForm.value;
    if (clarificationText) {
      this.authService.getUserByUserName(userName as string).subscribe(
        response => {
          if (response.length > 0 && response[0].password === password) {
            sessionStorage.setItem('userName', userName as string);
            this.router.navigate(['/home']);
          } else {
            this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Kullanıcı adı ya da şifre yanlış.' });
          }
        },
        error => {
          this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Bir şeyler ters gitti.' });
        }
      );
    } else {
      this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Lütfen aydınlatma metnini okuyup onaylayın.' });
    }
  }
}