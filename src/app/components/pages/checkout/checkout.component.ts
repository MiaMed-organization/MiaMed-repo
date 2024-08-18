import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  personalInfoForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/)]],
    lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/)]],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(10), Validators.maxLength(12)]],
    emailAddress: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  get firstName() {
    return this.personalInfoForm.controls['firstName'];
  }

  get lastName() {
    return this.personalInfoForm.controls['lastName'];
  }

  get phoneNumber() {
    return this.personalInfoForm.controls['phoneNumber'];
  }

  get emailAddress() {
    return this.personalInfoForm.controls['emailAddress'];
  }

  onUpload(event: any) {  // Burada event türünü any olarak güncelledik
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

  submitPersonalInfo() {
    if (this.personalInfoForm.valid) {
      console.log('Form submitted successfully');
      // Form işlemleri burada yapılacak
    } else {
      console.log('Form is invalid');
    }
  }

  validatePhoneNumber(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.charCode);
    if (!/^\d+$/.test(inputChar) && event.key !== 'Backspace') {
      event.preventDefault();
    }
  }

  validateText(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.charCode);
    if (!/^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/.test(inputChar) && event.key !== 'Backspace') {
      event.preventDefault();
    }
  }
}
