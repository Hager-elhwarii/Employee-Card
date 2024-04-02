import { Component, OnInit } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormComponent,
    EmployeeCardComponent,
    LoaderComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Employee-Card';

  imageUrls: string[] = [
    'https://profile-images.xing.com/images/67d0147185d90af82453e1fe2f49063b-5/erkan-yildirim.1024x1024.jpg',
    'https://webstockreview.net/images/barcode-clipart-transparent-9.png',
    'https://iili.io/JwNVywF.png',
  ];

  constructor() {}

  ngOnInit() {
    // this.preloadImages();
  }

  preloadImages(): void {
    // Iterate through the array of image URLs and preload each image
    this.imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;

      // Optional: Handle onload and onerror events
      img.onload = () => {};

      img.onerror = (error) => {
        console.log(error);
      };
    });
  }
}
