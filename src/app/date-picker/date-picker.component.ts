import { Component, EventEmitter, Output } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
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