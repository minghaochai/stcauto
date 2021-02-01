import { Component, OnInit, NgModule, Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from '../app-config.module';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import '../../assets/smtp.js'; 
declare let Email : any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

@Injectable()
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
  showLocation1: boolean = true;
  showLocation2: boolean = false;

  //private countryListURL = 'https://stcautomailservice.azurewebsites.net/CountryList'
  //private enquiryMailURL = 'https://stcautomailservice.azurewebsites.net/sendmail'

  private countryListURL = 'http://localhost:3000/CountryList'
  private enquiryMailURL = 'http://localhost:3000/sendmail'
  
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
    ) { }

  ngOnInit() {
    //this.GetCountryList();
    this.GetCountryListJson();
  }

  //async GetCountryList() {
  //  await this.http.get(this.countryListURL).subscribe((data: any[])=>{
  //    this.countries = data;
  //  })
  //}

  displayLocation1() {
    this.showLocation1 = true;
    this.showLocation2 = false;
  }


  displayLocation2() {
    this.showLocation1 = false;
    this.showLocation2 = true;
  }

  async GetCountryListJson() {
    await this.http.get("./assets/country.json").subscribe((data: any[])=>{
      this.countries = data;
    })
  }

  /*
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
  */

  async SendMail(){
    
    Email.send({
      /*
      Host : 'mail.stcauto.com.my',
      Username : 'test@stcauto.com.my',
      Password : '123456789zxcvbN!',
      */
      Host : this.config.emailHost,
      Username : this.config.emailLogin,
      Password : this.config.emailPW,
      To : 'chaiminghao69@gmail.com',
      From : this.config.emailLogin,
      Subject : 'Testing',
      Body : 
        'You have received an Enquiry from ' + this.requestorName + ', please refer to the details below' + '<br>' + '<br>' +
        'Name: ' + this.requestorName + '<br>' +
        'Email: ' + this.requestorMail + '<br>' +
        'Contact number: ' + this.requestorContact + '<br>' +
        'Address: ' + this.requestorAddress + '<br>' +
        'Country: ' + this.requestorCountry['country'] + '<br>' +
        'Car Model: ' + this.requestorCarModel + '<br>' +
        'Frame: ' + this.requestorFrame + '<br>' +
        'Remarks: ' + this.requestorRemarks + '<br>' + '<br>' +

        'This email is sent via the contact form on the STC Auto Parts webpage'
      }).then( this.showMsg= true );
  }

  ValidateForm() {
    
  }
}
