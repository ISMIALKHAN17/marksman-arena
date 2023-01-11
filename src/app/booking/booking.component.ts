import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  isFormSent = false;
  mainText;
  constructor (){
    this.mainText = 'Booking'
  }
  onFormSent () {
     this.isFormSent = true;
     this.backButtom = true;
  }

  backButtom : any

  receiveDataFromChild(data: boolean) {
   this.backButtom  = false
   this. isFormSent = false;
  }
}
