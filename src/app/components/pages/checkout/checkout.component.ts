import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  checked: boolean = false;

  paymentInfoForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/)]],
    lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/)]],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(10), Validators.maxLength(12)]],
    emailAddress: ['', [Validators.required, Validators.email]],
    paymentMethod: ['', Validators.required],
    cardHolderName: ['', [Validators.required, Validators.pattern(/^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/)]],
    cardNumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    cvv: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    expiryMonth: ['', Validators.required],
    expiryYear: ['', Validators.required]
  });

  months = [
    { label: 'Ocak', value: '01' },
    { label: 'Şubat', value: '02' },
    { label: 'Mart', value: '03' },
    { label: 'Nisan', value: '04' },
    { label: 'Mayıs', value: '05' },
    { label: 'Haziran', value: '06' },
    { label: 'Temmuz', value: '07' },
    { label: 'Ağustos', value: '08' },
    { label: 'Eylül', value: '09' },
    { label: 'Ekim', value: '10' },
    { label: 'Kasım', value: '11' },
    { label: 'Aralık', value: '12' }
  ];

  years = this.generateYears();

  generateYears(): any[] {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear; i <= currentYear + 20; i++) {
      years.push({ label: i.toString(), value: i.toString() });
    }
    return years;
  }

  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  get firstName() {
    return this.paymentInfoForm.controls['firstName'];
  }

  get lastName() {
    return this.paymentInfoForm.controls['lastName'];
  }

  get phoneNumber() {
    return this.paymentInfoForm.controls['phoneNumber'];
  }

  get emailAddress() {
    return this.paymentInfoForm.controls['emailAddress'];
  }

  get cardHolderName() {
    return this.paymentInfoForm.controls['cardHolderName'];
  }

  get cardNumber() {
    return this.paymentInfoForm.controls['cardNumber'];
  }

  get cvv() {
    return this.paymentInfoForm.controls['cvv'];
  }

  get expiryMonth() {
    return this.paymentInfoForm.controls['expiryMonth'];
  }

  get expiryYear() {
    return this.paymentInfoForm.controls['expiryYear'];
  }

  onUpload(event: any) { 
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

  submitPaymentInfo() {
    if (this.paymentInfoForm.valid) {
      console.log('Form submitted successfully');
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
