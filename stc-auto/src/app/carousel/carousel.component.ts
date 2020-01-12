import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = ["assets/images/porscheDealership.jpg", "assets/images/porscheManufacture.jpg", "assets/images/porscheTeam.jpg"];
}
