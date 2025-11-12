import { Component, inject, OnInit, Signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { numericValidator, uniqueEmailValidator } from 'src/app/Validators/validators';

@Component({
  selector: 'app-examen3',
  templateUrl: './examen3.page.html',
  styleUrls: ['./examen3.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})
export class Examen3Page implements OnInit {

  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  studentForm: FormGroup = this.formBuilder.group({
    studentName: ['', [Validators.required]],
    studentEmail: ['', [Validators.required, Validators.email], [uniqueEmailValidator()]],
    studentPhone: ['', [numericValidator(), Validators.minLength(10)]],
    studentDni: ['', [Validators.required, numericValidator(),Validators.minLength(13)]],
    studentGenre: ['',]
  })
  constructor() { }

  ngOnInit() {
  }

  get isStudentNameRequire(): boolean {
    const studentNameControl: AbstractControl | null = this.studentForm.get('studentName');
    return studentNameControl
      ? studentNameControl.hasError('required') && studentNameControl.touched
      : false
  }

  get isStudentEmailRequire(): boolean {
    const studentEmailControl: AbstractControl | null = this.studentForm.get('studentEmail');
    return studentEmailControl
      ? studentEmailControl.hasError('required') && studentEmailControl.touched
      : false
  }

  get isStudentEmailInvalid(): boolean {
    const studentEmailControl: AbstractControl | null = this.studentForm.get('studentEmail');
    return studentEmailControl
      ? studentEmailControl.hasError('email') && studentEmailControl.touched
      : false
  }

  get isStudentEmailUniqueError(): boolean {
    const studentEmailControl: AbstractControl | null = this.studentForm.get('studentEmail');
    return studentEmailControl
      ? studentEmailControl.hasError('uniqueEmail') && (studentEmailControl.dirty || studentEmailControl.touched)
      : false
  }

  get isStudentPhoneNonNumericError(): boolean {
    const studentPhoneControl: AbstractControl | null = this.studentForm.get('studentPhone');
    return studentPhoneControl
      ? studentPhoneControl.value && studentPhoneControl.hasError('nonNumeric') && studentPhoneControl.touched
      : false
  }

  get isStudentPhoneMinLengthError(): boolean {
    const studentPhoneControl: AbstractControl | null = this.studentForm.get('studentPhone');
    return studentPhoneControl
      ? studentPhoneControl.value && studentPhoneControl.hasError('minlength') && studentPhoneControl.touched
      : false
  }

  get isStudentDniRequire(): boolean {
    const studentDniControl: AbstractControl | null = this.studentForm.get('studentDni');
    return studentDniControl
      ? studentDniControl.hasError('required') && studentDniControl.touched
      : false
  }

  get isStudentDniNonNumericError(): boolean {
    const studentDniControl: AbstractControl | null = this.studentForm.get('studentDni');
    return studentDniControl
      ? studentDniControl.hasError('nonNumeric') && studentDniControl.touched
      : false
  }

  get isStudentDniMinLengthError(): boolean {
    const studentDniControl: AbstractControl | null = this.studentForm.get('studentDni');
    return studentDniControl
      ? studentDniControl.hasError('minlength') && studentDniControl.touched
      : false
  }

}
