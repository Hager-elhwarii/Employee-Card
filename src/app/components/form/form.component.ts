import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  protected registerForm!: FormGroup;
  protected submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      companyName: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ],
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
    this.submitted = true;

    if (this.registerForm.valid) {
      console.table(this.registerForm.value);
    }else {
      console.log("form not valid");
      
    }
  }

  protected resetForm(): void {
    this.registerForm.reset();
  }
}

