import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule ,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { GamesComponent } from './games/games.component';
import { FooterComponent } from './footer/footer.component';
import { InnerBannerComponent } from './inner-banner/inner-banner.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { SlotsComponent } from './slots/slots.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input'
import {MatNativeDateModule} from '@angular/material/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { BookingPageComponent } from './booking-page/booking-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSliderComponent,
    GamesComponent,
    FooterComponent,
    InnerBannerComponent,
    BookingComponent,
    routingComponents,
    HomeComponent,
    BookingFormComponent,
    BookingPageComponent,
   
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    NgbModule,
    DatePickerComponent,
    SlotsComponent
 
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
