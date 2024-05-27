import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) {
        return null;  //iki alanda tanımlı değilse null döner
    }

    return password.value === confirmPassword.value ? null : { passwordMismatch: true } //değer eşleşiyorsa null
}