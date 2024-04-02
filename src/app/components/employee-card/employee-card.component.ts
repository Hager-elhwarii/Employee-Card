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
    console.log({
      toggle: this.toggleProperty,
      loaded: this.imageLoaded,
      Timestamp: Date.now(),
    });
    console.log('onInit');
    this.imageLoaded = true;
    console.log({ afeter: this.imageLoaded, Timestamp: Date.now() });
  }

  ngOnDestroy(): void {
    this.imageLoaded = false;
  }

  toggle() {
    this.toggleProperty = !this.toggleProperty;
  }
}
