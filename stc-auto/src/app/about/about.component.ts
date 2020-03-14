import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  test = ""
  constructor() { }

  ngOnInit() {
    this.test = "assets/images/Value2.png";
  }

}
