import { Component } from '@angular/core';
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
	model!: NgbDateStruct;
	date!: { year: number; month:   number };
  minDate: { year: number; month: number; day: number; };

	constructor(private calendar: NgbCalendar) {
    const current = new Date();
  this.minDate = {
    year: current.getFullYear(),
    month: current.getMonth() + 1,
    day: current.getDate()
  };
  }

	selectToday() {
		this.model = this.calendar.getToday();
}

}