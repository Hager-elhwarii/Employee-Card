import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css',
})
export class LoaderComponent implements OnInit {
  imagesLoaded: boolean = false;

  ngOnInit() {
    // Simulate image loading delay
    setTimeout(() => {
      this.imagesLoaded = true;
    }, 2000); // Adjust the delay as per your requirement

    this.imagesLoaded = false;
  }
}
