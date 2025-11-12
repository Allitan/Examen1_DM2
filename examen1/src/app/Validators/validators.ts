import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function numericValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if (!value) return null;
        const isNumeric = /^\d*$/.test(value);
        return isNumeric ? null : { nonNumeric: true };
    };
}
export function uniqueEmailValidator(delay: number = 500) {
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
        return new Promise(resolve => {
            setTimeout(() => {
                if (control.value === 'test@exist.com') {
                    resolve({ uniqueEmail: true });
                } else {
                    resolve(null);
                }
            }, delay);
        });
    };
}