import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-carousel',
  templateUrl: './dynamic-carousel.component.html',
  styleUrls: ['./dynamic-carousel.component.css']
})
export class DynamicCarouselComponent implements OnInit {

  @Input()
  imageObject: Array<{link: string, page: string, header: string, description: string}>;

  event_list = [
    {
      event:' Event 1',
      page: 'Home',
      eventLocation:'Bangalore',
      eventDescription:'In bangalore, first event is going to happen. Please be careful about it',
      img: 'assets/images/HomePage1.jpg',
      eventStartDate: new Date('2019/05/20'),
      eventEndingDate: new Date('2019/05/24')
    },
     {
      event:' Event 2',
      page: 'Home',
      eventLocation:'Dubai',
      eventDescription:'Dubai is another place to host so,e, first event is going to happen. Please be careful about it',
      img: 'assets/images/HomePage2.jpg',
      eventStartDate: new Date('2019/07/28'),
      eventEndingDate: new Date('2019/07/30')
    },
     {
      event:' Event 3',
      page: 'Home',
      eventLocation:'New York',
      eventDescription:'NewYork sits on top of event hosting',
      img: 'assets/images/HomePage3.jpg',
      eventStartDate: new Date('2020/05/20'),
      eventEndingDate: new Date('2020/05/24')
    },
     {
      event:' Event 4',
      page: 'About us',
      eventLocation:'Singapore',
      eventDescription:'Singapore is another great hosting city',
      img: 'assets/images/AboutUs1.png',
      eventStartDate: new Date('2018/05/20'),
      eventEndingDate: new Date('2018/05/24')
    },
    {
      event:' Event 5',
      page: 'About us',
      eventLocation:'Berlin',
      eventDescription: 'Berlin is best place to hang on',
      img: 'assets/images/AboutUs2.JPG',
      eventStartDate: new Date('2017/07/10'),
      eventEndingDate: new Date('2017/08/14')
    },
  ]

  past_events = this.event_list.filter(event => event.page === "Home");
  current_events =  this.event_list.filter( event => (event.page === "About us" ));
  
  constructor() { }

  ngOnInit() {
  }

}
