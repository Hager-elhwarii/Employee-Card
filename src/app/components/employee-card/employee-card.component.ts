import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [EmployeeCardComponent, CommonModule, LoaderComponent],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css',
})
export class EmployeeCardComponent implements OnInit, OnDestroy {
  @Input() formData: any;
  toggleProperty = false;
  imageLoaded = false;

  constructor() {}

  ngOnInit() {
    this.imageLoaded = true;
  }

  ngOnDestroy(): void {
    this.imageLoaded = false;
  }

  toggle() {
    this.toggleProperty = !this.toggleProperty;
  }
}
