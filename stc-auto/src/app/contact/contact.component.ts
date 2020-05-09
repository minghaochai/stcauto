import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  requestorName: string; 
  requestorFrame: string;
  requestorContact: string;
  requestorAddress: string;
  requestorMail: string; 
  requestorCountry: string;
  requestorCarModel: string;
  requestorRemarks: string; 

  constructor() { 
  }

  ngOnInit() {
  }

  sendMail() {
    let details = {
      requestName: this.requestorName,
      requestFrame: this.requestorFrame,
      requestContact: this.requestorContact,
      requestAddress: this.requestorAddress,
      requestMail: this.requestorMail,
      requestCountry: this.requestorCountry,
      requestCarModel: this.requestorCarModel,
      requestRemarks: this.requestorRemarks,
    }

    console.log("clicked")
    console.log(this.requestorCountry)
    console.log(details.requestCountry)
  }
}
