import { Component } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';
import { TestCardComponent } from './components/test-card/test-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormComponent,
    EmployeeCardComponent,
    LoaderComponent,
    CommonModule,
    TestCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Employee-Card';
}
