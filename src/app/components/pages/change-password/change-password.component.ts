import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  userId: string = 'oz123'; // Şu an için sabit
  showNewPassword: boolean = false;
  showConfirmPassword: boolean = false;


  constructor(private userService: UserService, private msgService: MessageService) { }

  togglePasswordVisibility(field: string) {
    if (field === 'newPassword') {
      this.showNewPassword = !this.showNewPassword;
    } else if (field === 'confirmPassword') {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  onSaveChanges() {
    if (!this.oldPassword || !this.newPassword || !this.confirmPassword) {
      this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Tüm alanlar doldurulmalıdır.' });
      return;
    }

    this.userService.getUserById(this.userId).subscribe(user => {
      if (user.password === this.oldPassword) {
        if (this.newPassword === this.confirmPassword) {
          this.userService.updateUserPassword(this.userId, this.newPassword).subscribe(response => {
            this.msgService.add({ severity: 'success', summary: 'Success', detail: 'Şifre başarıyla değiştirildi.' });
          }, error => {
            this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Şifre güncellenemedi.' });
          });
        } else {
          this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Yeni şifreler eşleşmiyor.' });
        }
      } else {
        this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Eski şifre yanlış.' });
      }
    });
  }

  onCancel() {
    this.oldPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
    console.log('Input fields have been cleared.');
  }
}
