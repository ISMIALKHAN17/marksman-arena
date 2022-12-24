import { Component } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from "../date-picker/date-picker.component";
import * as $ from 'jquery';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-slots',
    standalone: true,
    templateUrl: './slots.component.html',
    styleUrls: ['./slots.component.css'],
    imports: [NgbDatepickerModule, DatePickerComponent,CommonModule]
})
export class SlotsComponent {
  closeResult = '';

  

	timeSlot =[{
		time: '10:00 am'
	},
	{
		time: '11:00 am'
	},
	{
		time: '12:00 am'
	},
	{
		time: '1:00 pm'
	},
	{
		time: '2:00 pm'
	},
	{
		time: '3:00 pm'
	},
	{
		time: '4:00 am'
	},
	{
		time: '5:00 pm'
	},
	{
		time: '6:00 pm'
	},





	];
	seats = [{
	  name: 'Slot 1',
	  label: 'slot-1'
	},
	{
	  name: 'Slot 2',
	  label: 'slot-2'
	},
	{
	  name: 'Slot 3',
	  label: 'slot-3'
	},
	{
	  name: 'Slot 4',
	  label: 'slot-4'
	},
	{
	  name: 'Slot 5',
	  label: 'slot-5'
	},
	{
	  name: 'Slot 6',
	  label: 'slot-6'
	},
	{
	  name: 'Slot 7',
	  label: 'slot-7'
	},
	{
	  name: 'Slot 8',
	  label: 'slot-8'
	},
  ];
  seatsRow2 = [{
	  name: 'Slot2 1',
	  label: 'slot2-1'
	},
	{
	  name: 'Slot2 2',
	  label: 'slot2-2'
	},
	{
	  name: 'Slot2 3',
	  label: 'slot2-3'
	},
	{
	  name: 'Slot2 4',
	  label: 'slot2-4'
	},
	{
	  name: 'Slot2 5',
	  label: 'slot2-5'
	},
	{
	  name: 'Slot2 6',
	  label: 'slot2-6'
	},
	{
	  name: 'Slot2 7',
	  label: 'slot2-7'
	},
	{
	  name: 'Slot2 8',
	  label: 'slot2-8'
	},
  ];
  checkseats() {
		var checkboxes = $('.slots li input[type="checkbox"]').filter(':checked').length;
		if(checkboxes >= 6  && checkboxes%2 == 0 ){
			$('#ex').removeAttr('disabled')
		}
		else{
			$('#ex').attr('disabled','true')
			$('#ex').prop('checked', false); 
		}

	}
	

	constructor(private modalService: NgbModal) {}

	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	
	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
	

	



}
