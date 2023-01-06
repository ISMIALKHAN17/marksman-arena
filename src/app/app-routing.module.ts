import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { BookingComponent } from './booking/booking.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { EventsComponent } from './events/events.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { HomeComponent } from './home/home.component';
import { LeaderboardPageComponent } from './leaderboard-page/leaderboard-page.component';
import { NewsEventsComponent } from './news-events/news-events.component';
import { ProceedFormComponent } from './proceed-form/proceed-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'booking',component:BookingComponent},
  {path:'book',component:BookingPageComponent, 
  data: {
    headerText: 'Booking',
    bannerText:'Booking Page'
  }
},
  {path:'news',component:NewsEventsComponent,data: {
    headerText: 'News and Promos'
  }},
  {path:'coming-soon',component:ComingSoonComponent},
  {path:'about-us',component:AboutPageComponent ,data: {
    headerText:'About Us',
    bannerText:'This is About Us Page'
  }},
  {path:'events',component:EventsComponent ,data: {
    headerText:'Events',
    bannerText:'This is Events Page'
  }},
  {path:'gallery',component:GalleryPageComponent ,data: {
    headerText:'Our Gallery',
    bannerText:'This is Gallery Page'
  }},
  {path:'leaderboard',component:LeaderboardPageComponent ,data: {
    headerText:'Leaderboard',
    bannerText:'This is leaderboard Page'
  }},
  {path:'proceed-booking',component:ProceedFormComponent ,data: {
    headerText:'Players Info',
    bannerText:'This is proceed-booking Page'
  }}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =  [BookingComponent,HomeComponent,BookingPageComponent,ComingSoonComponent,NewsEventsComponent,EventsComponent,GalleryPageComponent,LeaderboardPageComponent,ProceedFormComponent]