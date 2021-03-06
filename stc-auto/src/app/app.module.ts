import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';
import { AppConfigModule } from './app-config.module';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { StcAutoBackTemplateComponent } from './stc-auto-back-template/stc-auto-back-template.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ModalpopupComponent } from './modalpopup/modalpopup.component';
import { DynamicCarouselComponent } from './dynamic-carousel/dynamic-carousel.component';
import { CarouselHomeComponent } from './carousel-home/carousel-home.component';

@NgModule({
  declarations: [
    AppComponent,
    StcAutoBackTemplateComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    CarouselComponent,
    ModalpopupComponent,
    DynamicCarouselComponent,
    CarouselHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AppConfigModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
