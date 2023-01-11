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
  // formGroup: FormGroup;
  // nameControl: FormControl;
  // emailControl: FormControl;
  // phoneControl: FormControl;
  // playersControl: FormControl;
  submitted: boolean;

  constructor() {
    // this.nameControl = new FormControl('', [Validators.required]);
    // this.emailControl = new FormControl('', [Validators.required, Validators.email]);
    // this.phoneControl = new FormControl('', [Validators.required, Validators.pattern(/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/)]);
    // this.playersControl = new FormControl('', [Validators.required]);
    // this.formGroup = new FormGroup({
    //   name: this.nameControl,
    //   email: this.emailControl,
    //   phone: this.phoneControl,
    //   players: this.playersControl,
    // });
    this.submitted = false;
  }
  
  ngOnInit(): void {
   this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone_no: new FormControl('', [Validators.required, Validators.pattern(/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/)]),
      no_of_players:  new FormControl('', [Validators.required])
     }); 
  }


data=[];
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
