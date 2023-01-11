import { Component, EventEmitter, Output } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDatepickerModule, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
@Component({
    selector: 'app-date-picker',
    templateUrl: './date-picker.component.html',
    standalone: true,
    styleUrls: ['./date-picker.component.css'],
    imports: [NgbDatepickerModule, FormsModule, JsonPipe]
})
export class DatePickerComponent {
  today = new Date() ;
	model!: NgbDateStruct;
	date!: { year: number; month: number };
  minDate: { year: number; month: number; day: number; };

	constructor(private calendar: NgbCalendar) {
    const current = new Date();
  this.minDate = {
    year: current.getFullYear(),
    month: current.getMonth() + 1,
    day: current.getDate()
  };
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   
  }

  getWeekday(date: NgbDate) {
    const fullDayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = new Date(date.year, date.month - 1, date.day).getUTCDay();
    return fullDayName[day];
}

  @Output() messageEvent = new EventEmitter<string>();

  onDateSelect(event:any){
    this.sendMessage(event)
  }
  sendMessage(date:any) {
    this.messageEvent.emit(date);
  }
  isDisabled(date: NgbDateStruct) {
    const day = date.day;
    const month = date.month;
    const year = date.year;
    const monday = new Date(year, month - 1, day).getDay() === 1;
    return monday;
  }
 

}