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
    phoneNumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    emailAddress: ['', [Validators.required, Validators.email]],
    bloodGroup: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private messageService: MessageService) { }

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

  validatePhoneNumber(event: KeyboardEvent) {
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  submitPersonalInfo() {
    if (this.personalInfoForm.valid) {
      console.log(this.personalInfoForm.value);
      // Form verilerini işleme ekleyin
    }
  }

}
