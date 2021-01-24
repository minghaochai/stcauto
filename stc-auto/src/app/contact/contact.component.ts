import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  showMsg: boolean = false;

  //private countryListURL = 'https://stcautomailservice.azurewebsites.net/CountryList'
  //private enquiryMailURL = 'https://stcautomailservice.azurewebsites.net/sendmail'

  private countryListURL = 'http://localhost:3000/CountryList'
  private enquiryMailURL = 'http://localhost:3000/sendmail'
  
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    //this.GetCountryList();
    this.GetCountryListJson();
  }

  //async GetCountryList() {
  //  await this.http.get(this.countryListURL).subscribe((data: any[])=>{
  //    this.countries = data;
  //  })
  //}

  async GetCountryListJson() {
    await this.http.get("./assets/country.json").subscribe((data: any[])=>{
      this.countries = data;
    })
  }

  async SendMail() {
    var jsonMailDetails = {
      "requestorName": this.requestorName,
      "requestorMail": this.requestorMail,
      "requestorContact": this.requestorContact,
      "requestorAddress": this.requestorAddress,
      "requestorCountry": (this.requestorCountry != null) ? this.requestorCountry['country'] : undefined,
      "requestorCarModel": this.requestorCarModel,
      "requestorFrame": this.requestorFrame,
      "requestorRemarks": this.requestorRemarks
    };

    await this.http.post<any>(this.enquiryMailURL, jsonMailDetails).subscribe(data=>{
      this.showMsg= true;
    })
  }

  ValidateForm() {
    
  }
}
