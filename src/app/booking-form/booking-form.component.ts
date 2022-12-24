import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {
  @Output() formSent: EventEmitter<void> = new EventEmitter();

  sendForm () {
     // Send your form
     this.formSent.emit();
 
    }
}
