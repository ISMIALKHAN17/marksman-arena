import { Component } from '@angular/core';
import { FormControl, Validators,FormGroup,FormBuilder,FormArray } from '@angular/forms';

@Component({
  selector: 'app-proceed-form',
  templateUrl: './proceed-form.component.html',
  styleUrls: ['./proceed-form.component.css']
})

export class ProceedFormComponent {

name : any;
email: any;
number:any;
date:any;
slot:any;
json_booking_final : any

  ngOnInit(): void {
   this.getBookingDetails()
  }

  
  getBookingDetails(){
    let booking_final: any = localStorage.getItem('booking_final');
     this.json_booking_final = JSON.parse(booking_final);
    
    this.name  =   this.json_booking_final.name
    this.email  =   this.json_booking_final.email
    this.number  =   this.json_booking_final.phone_no
    this.date  =   this.json_booking_final.date
    this.slot  =   this.json_booking_final.time_slot
  }


}

