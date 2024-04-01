import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, EmployeeCardComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  protected registerForm!: FormGroup;
  protected submitted: boolean = false;
  protected submittedSuccessfully: boolean = false;
  protected formData: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      companyName: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z ]*')],
      ],
      employeeName: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z ]*')],
      ],
      idNumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      dateOfBirth: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  protected onSubmit(): void {
    this.submitted = true;
    console.log('innnn submit');

    if (this.registerForm.valid) {
      console.log('form is valid');

      console.table(this.registerForm.value);
      this.submittedSuccessfully = true;
   
      this.formData = this.registerForm.value;
      console.log(this.formData);
      
    } else {
      console.log('form not valid');
    }
  }

  protected resetForm(): void {
    this.registerForm.reset();
    this.submittedSuccessfully = false;
  }
}
