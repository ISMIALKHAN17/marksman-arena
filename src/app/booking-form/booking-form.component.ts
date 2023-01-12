import { Component ,EventEmitter ,Output} from '@angular/core';
import { FormControl,FormGroup, Validators , } from '@angular/forms';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {
  @Output() formSent: EventEmitter<void> = new EventEmitter();
  formGroup:any = [];
  fb:any;
  submitted: boolean;
  nameInput : any
  emailInput : any
  phoneInput : any
  playerInput : any

  constructor() {
    this.submitted = false;
  }
  
  ngOnInit(): void {
   this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone_no: new FormControl('', [Validators.required, Validators.pattern(/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/)]),
      no_of_players:  new FormControl('', [Validators.required])
     }); 

    let  data : any= localStorage.getItem('booking_form')
    let json_data = JSON.parse(data);
    this.nameInput = json_data.name
    this.emailInput = json_data.email
    this.phoneInput = json_data.phone_no
    this.playerInput = json_data.no_of_players



     


     
  }




  sendForm () {
    this.rule();
    if (this.formGroup.valid) {
      let local = localStorage.setItem('booking_form',JSON.stringify(this.formGroup.value));
     this.formSent.emit();
     return;
    } else {
      // alert('error')
    }
    this.submitted = true;
  }

  rule(){
   this.fb = this.formGroup.controls;
    
  }
  

}
