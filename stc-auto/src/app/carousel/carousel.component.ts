import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() 
  pageImages: string;

  images = [];

  ngOnInit() {
    /*
    this.images = ["assets/images/AboutUs2.JPG", this.pageImages, "assets/images/porscheTeam.jpg"];
    */
    this.images = ["assets/images/AboutUs2.JPG", "assets/images/AboutUs1.png"];
  }
}
