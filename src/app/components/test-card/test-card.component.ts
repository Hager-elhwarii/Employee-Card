import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-card',
  standalone: true,
  imports: [TestCardComponent, CommonModule],
  templateUrl: './test-card.component.html',
  styleUrl: './test-card.component.css',
})
export class TestCardComponent implements OnInit {
  @Input() formData: any;

  imageUrls: string[] = [
    'https://profile-images.xing.com/images/67d0147185d90af82453e1fe2f49063b-5/erkan-yildirim.1024x1024.jpg',
    'https://webstockreview.net/images/barcode-clipart-transparent-9.png',
    'https://iili.io/JwNVywF.png',
  ];

  toggleProperty = false;

  constructor() {}

  ngOnInit() {
    this.preloadImages();
  }

  preloadImages(): void {
    // Iterate through the array of image URLs and preload each image
    this.imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;

      // Optional: Handle onload and onerror events
      img.onload = () => {
        console.log(`Image ${url} preloaded successfully.`);
      };

      img.onerror = (error) => {
        console.error(`Error preloading image ${url}:`, error);
      };
    });
  }

  toggle() {
    this.toggleProperty = !this.toggleProperty;
  }
}
