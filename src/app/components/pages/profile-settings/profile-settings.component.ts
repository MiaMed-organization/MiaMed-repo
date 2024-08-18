import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrl: './profile-settings.component.css'
})
export class ProfileSettingsComponent {

  personalInfoForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/)]],
    lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/)]],
    dateOfBirth: ['', Validators.required],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(10), Validators.maxLength(12)]],
    emailAddress: ['', [Validators.required, Validators.email]],
    bloodGroup: ['', Validators.required]
  });

  addressForm = this.fb.group({
    address: ['', Validators.required],
    city: ['', [Validators.required, Validators.pattern(/^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/)]],
    state: ['', [Validators.required, Validators.pattern(/^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/)]],
    country: ['', [Validators.required, Validators.pattern(/^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/)]],
    pincode: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
  });

  maxDate: Date;

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.maxDate = new Date();
  }

  onUpload(event: any) {  // Burada event türünü any olarak güncelledik
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

  get firstName() {
    return this.personalInfoForm.controls['firstName'];
  }

  get lastName() {
    return this.personalInfoForm.controls['lastName'];
  }

  get dateOfBirth() {
    return this.personalInfoForm.controls['dateOfBirth'];
  }

  get phoneNumber() {
    return this.personalInfoForm.controls['phoneNumber'];
  }

  get emailAddress() {
    return this.personalInfoForm.controls['emailAddress'];
  }

  get bloodGroup() {
    return this.personalInfoForm.controls['bloodGroup'];
  }

  //adres
  get address() {
    return this.addressForm.controls['address'];
  }

  get city() {
    return this.addressForm.controls['city'];
  }

  get state() {
    return this.addressForm.controls['state'];
  }

  get country() {
    return this.addressForm.controls['country'];
  }

  get pincode() {
    return this.addressForm.controls['pincode'];
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

  validatePincode(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.charCode);
    if (!/^\d+$/.test(inputChar) && event.key !== 'Backspace') {
      event.preventDefault();
    }
  }

  submitAddressInfo() {
    if (this.addressForm.valid) {
      console.log('Address form submitted successfully');
      // Form işlemleri burada yapılacak
    } else {
      console.log('Address form is invalid');
    }
  }

  submitForms() {
    if (this.personalInfoForm.valid && this.addressForm.valid) {
      // İki form da geçerliyse işlemleri gerçekleştirin
      console.log('Personal Info:', this.personalInfoForm.value);
      console.log('Address Info:', this.addressForm.value);
    } else {
      console.log('Forms are invalid');
    }
  }

  resetForms() {
    this.personalInfoForm.reset();
    this.addressForm.reset();
  }
  

}
