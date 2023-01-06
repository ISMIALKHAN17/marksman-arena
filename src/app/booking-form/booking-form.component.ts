import { Component ,EventEmitter ,Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { FormControl, Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {
  @Output() formSent: EventEmitter<void> = new EventEmitter();
  booking_form:any = [];
  // DataForm: FormGroup = new FormGroup({});
  
  ngOnInit(): void {
   this.booking_form = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      phone_no: new FormControl(),
      no_of_players: new FormControl()
     }); 
  }

  constructor(private dataService: DataService) {}

data=[];
//   data = {
//     "name":"test2",
//     "email":"test@gmail.com",
//     "phone_no":"03123465789",
//     "no_of_players":2
// }
  sendForm () {
    let local = localStorage.setItem('booking_form',JSON.stringify(this.booking_form.value));
    
     // Send your form
     this.formSent.emit();
     return;
     this.dataService.post('/public/api/slot_booked',this.data,{
      headers: {
        'Content-Type': 'application/json'
      }
     }).subscribe(response => {
      console.log(response);
    });

  }


}
