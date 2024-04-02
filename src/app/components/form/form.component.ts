import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    EmployeeCardComponent,
    LoaderComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  protected registerForm!: FormGroup;
  protected submitted: boolean = false;
  protected submittedSuccessfully: boolean = false;
  protected imageLoaded: boolean = false;
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
        [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      idNumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      dateOfBirth: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  protected onSubmit(): void {
    console.log('in submit');
    
    this.submitted = true;
    if (this.registerForm.valid) {
      this.submittedSuccessfully = true;
      this.formData = this.registerForm.value;
      this.loadImages();
    }
  }

  protected loadImages() {
    setTimeout(() => {
      this.imageLoaded = true;
    }, 2000);
  }

  protected resetForm(): void {
    this.registerForm.reset();
    this.submittedSuccessfully = false;
    this.imageLoaded = false;
  }
}
