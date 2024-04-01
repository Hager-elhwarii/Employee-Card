import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [EmployeeCardComponent, CommonModule],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css',
})
export class EmployeeCardComponent implements OnInit {
  @Input() formData: any;

  constructor() {}

  ngOnInit() {
  }
}
