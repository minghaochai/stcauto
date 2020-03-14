import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.css']
})
export class CarouselHomeComponent implements OnInit {
  images = [];
  constructor() { }

  ngOnInit() {
    this.images = ["assets/images/HomePage1.jpg", "assets/images/HomePage2.jpg", "assets/images/HomePage3.jpg"];
  }

}
