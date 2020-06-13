import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  countries = [];

  private countryListURL = '/api/CountryList'
  private enuiryMailURL = '/api/emailRequest'

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.GetCountryList();
  }

  async GetCountryList() {
    await this.http.get(this.countryListURL).subscribe((data: any[])=>{
      this.countries = data;
    })
  }

  async SendMail() {
    var jsonMailDetails = {
      "requestorName": this.requestorName,
      "requestorMail": this.requestorMail,
      "requestorContact": this.requestorContact,
      "requestorAddress": this.requestorAddress,
      "requestorCountry": this.requestorCountry['country'],
      "requestorCarModel": this.requestorCarModel,
      "requestorFrame": this.requestorFrame,
      "requestorRemarks": this.requestorRemarks
    };

    await this.http.post<any>(this.enuiryMailURL, jsonMailDetails).subscribe(data=>{
    })
  }

  ValidateForm() {
    
  }
}
