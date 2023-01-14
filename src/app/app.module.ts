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
import { GalleryComponent } from './gallery/gallery.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NewsEventsComponent } from './news-events/news-events.component';
import { NewsEventsSliderComponent } from './news-events-slider/news-events-slider.component';
import { EventsComponent } from './events/events.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { LeaderboardPageComponent } from './leaderboard-page/leaderboard-page.component';
import { ProceedFormComponent } from './proceed-form/proceed-form.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamesComponent,
    FooterComponent,
    InnerBannerComponent,
    BookingComponent,
    routingComponents,
    HomeComponent,
    BookingFormComponent,
    BookingPageComponent,
    GalleryComponent,
    LeaderboardComponent,
    ComingSoonComponent,
    AboutPageComponent,
    NewsEventsComponent,
    EventsComponent,
    GalleryPageComponent,
    LeaderboardPageComponent,
    ProceedFormComponent,
    
  
    
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
    SlotsComponent,
    MainSliderComponent,
    HttpClientModule,
    NewsEventsSliderComponent,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    CountdownModule
    
  
     
 
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
