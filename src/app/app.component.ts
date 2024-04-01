import { Component } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent, EmployeeCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Employee-Card';
}
