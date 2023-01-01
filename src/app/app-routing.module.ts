import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { BookingComponent } from './booking/booking.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { HomeComponent } from './home/home.component';
import { NewsEventsComponent } from './news-events/news-events.component';

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
    headerText: 'News & Events'
  }},
  {path:'coming-soon',component:ComingSoonComponent},
  {path:'about-us',component:AboutPageComponent ,data: {
    headerText:'About Us',
    bannerText:'This is About Us Page'
  }}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =  [BookingComponent,HomeComponent,BookingPageComponent,ComingSoonComponent,NewsEventsComponent]