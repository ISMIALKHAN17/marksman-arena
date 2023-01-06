import { Component } from '@angular/core';
import { FormControl, Validators,FormGroup,FormBuilder,FormArray } from '@angular/forms';

@Component({
  selector: 'app-proceed-form',
  templateUrl: './proceed-form.component.html',
  styleUrls: ['./proceed-form.component.css']
})

export class ProceedFormComponent {
   

  constructor(private fb: FormBuilder) { }
  local_storage:any = localStorage.getItem('booking_form_with_date')
  local_data:any = JSON.parse(this.local_storage);
  length_of_players:any = [];
  booking_form:any = [];
  form:any = [];
  ngOnInit(): void {
    this.arr();
  
    this.form = new FormArray([
      new FormControl('name', Validators.minLength(2)),
      new FormControl('number', Validators.minLength(2)),
   ]);
  
  }
 

  arr(){
    
    for (let i = 1; i <=  this.local_data.no_of_players ; i++) {
      this.length_of_players.push(i);
    }
    // console.log(this.length_of_players);
  }
  getValues(){
    console.log(this.form.values);
  }
  
   



}
