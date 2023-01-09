import { Component, ViewChild } from '@angular/core';

import { NgModel } from '@angular/forms';

import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import * as $ from 'jquery';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import {
  FormControl,
  Validators,
  FormGroup,
  FormsModule,
} from '@angular/forms';
import { data } from 'jquery';

@Component({
  selector: 'app-slots',
  standalone: true,
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css'],
  imports: [
    NgbDatepickerModule,
    DatePickerComponent,
    CommonModule,
    FormsModule,
  ],
})
export class SlotsComponent {
  @ViewChild('closebutton') closebutton: any;
  closeResult = '';
  selectedTimeId: any;
  selected_date: any;
  name: any;
  number: any;
  arr: any = [];

  constructor(
    public modalService: NgbModal,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    // this.getData();
    // this.inputName = 'Select'
  }
  isLoading = true;

  timeSlots = [];

  getData(date:any) {
    this.isLoading = true;
    let d ={"date":date}
    this.dataService.post('/public/api/slot/booking_date',d, false)
      .subscribe((res: any) => {
        console.log(res);
        this.timeSlots = res;
        console.log('there bb');
      });

    this.isLoading = false;
  }
  userData : any;
  jsonUserData :any
  // Post DATA
  sendData() {
    this.userData = localStorage.getItem('booking_form_with_date')
    const jsonUserData  =  JSON.parse(this.userData);
    const url = '/public/api/slot_booked';
    const data = {
      name: jsonUserData.name,
      email: jsonUserData.email,
      phone_no: jsonUserData.phone_no,
      no_of_players: jsonUserData.no_of_players,
      date:  jsonUserData.date,
      time_slot: jsonUserData.slot_id,
      player_info: this.arr,
    };
    const token = false;
    this.dataService.post(url, data, token).subscribe((response) => {
      console.log(response)
      localStorage.setItem('booking_final', JSON.stringify(data));
    }); 
    
  }
  // Post DATA

  seats = [
    {
      name: 'Slot 1',
      label: 'slot-1',
      checked: false,
      value: 'available',
    },
    {
      name: 'Slot 2',
      label: 'slot-2',
      checked: false,
      value: 'available',
    },
    {
      name: 'Slot 3',
      label: 'slot-3',
      checked: false,
      value: 'available',
    },
    {
      name: 'Slot 4',
      label: 'slot-4',
      checked: false,
      value: 'available',
    },
    {
      name: 'Slot 5',
      label: 'slot-5',
      checked: false,
      value: 'available',
    },
    {
      name: 'Slot 6',
      label: 'slot-6',
      checked: false,
      value: 'available',
    },
    {
      name: 'Slot 7',
      label: 'slot-7',
      checked: false,
      value: 'available',
    },
    {
      name: 'Slot 8',
      label: 'slot-8',
      checked: false,
      value: 'available',
    },
  ];
  seatsRow2 = [
    {
      name: 'Slot2 1',
      label: 'slot2-1',
      checked: false,
      value: 'available',
    },
    {
      name: 'Slot2 2',
      label: 'slot2-2',
      checked: false,
      value: 'available',
    },
    {
      name: 'Slot2 3',
      label: 'slot2-3',
      checked: false,
      value: 'available',
    },
    {
      name: 'Slot2 4',
      label: 'slot2-4',
      checked: false,
      value: 'available',
    },
    {
      name: 'Slot2 5',
      label: 'slot2-5',
      checked: false,
      value: 'available',
    },
    {
      name: 'Slot2 6',
      label: 'slot2-6',
      checked: false,
      value: 'available',
    },
    {
      name: 'Slot2 7',
      label: 'slot2-7',
      checked: false,
      value: 'available',
    },
    {
      name: 'Slot2 8',
      label: 'slot2-8',
      checked: false,
      value: 'available',
    },
  ];

  checkseats() {
    var checkboxes = $('.slots li input[type="checkbox"]').filter(
      ':checked'
    ).length;

    if (checkboxes >= 8 && checkboxes % 2 == 0) {
      $('#ex').removeAttr('disabled');
    } else {
      $('#ex').attr('disabled', 'true');
      $('#ex').prop('checked', false);
    }
  }

  goToNextPage(pageName: string, content: any) {
    // console.log(this.selectedTime, this.selectedDate, this.selectedTimeId);
    for (let i = 0; i < this.arrynumbers.length; i++) {
      if (this.arrynumbers[i] != undefined) {
        this.arr.push({ player: this.arryData[i], number: this.arrynumbers[i] });
      }
    }

    this.sendData();
    this.goToPage(pageName);
    this.modalService.dismissAll(content);
  }

  closeModal(content:any){
    this.modalService.dismissAll(content);
  }

  goToPage(pageName: string) {
    close();
    this.router.navigate([`${pageName}`]);
  }

  selectedTime: any;

  getInputValue(inputElement: HTMLInputElement) {
    this.selectedTime = inputElement.value;
  }
  getInputValue2(slotId: HTMLInputElement) {
    this.selectedTimeId = slotId.value;
  }

  open(content: any, inputElement: any, slotId: any) {
    const condate = this.getInputValue(inputElement);
    this.getInputValue2(slotId);

    let slot: any = localStorage.getItem('booking_form');
    let json_slot = JSON.parse(slot);
    let data: any = {
      name: json_slot.name,
      email: json_slot.email,
      phone_no: json_slot.phone_no,
      no_of_players: json_slot.no_of_players,
      date: this.selected_date,
      slot_id: this.selectedTimeId,
    };

    localStorage.setItem('booking_form_with_date', JSON.stringify(data));

    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
    });
  }

  public getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  selectedDate: any;
  receiveMessage(date: string) {
    var mS = [
      '',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];
    let month: any = Object.values(date)[1];
    this.selectedDate = ` ${Object.values(date)[2]} - ${mS[month]} - ${
      Object.values(date)[0]
    }`;
    this.selected_date = ` ${Object.values(date)[2]}-${
      Object.values(date)[1]
    }-${Object.values(date)[0]}`;
    this.openSlots();
  }

  // slots
  openSlots() {
    $('#time').show('slow');
    this.getData(this.selected_date);



    $('#date').hide('slow');
  }
  openDate() {
    $('#time').hide('slow');
    $('#date').show('slow');
  }
  // slots

  showSpan = false;
  selected: any;
  toggle = false;
  booked = false;
  checkboxValue = [false, false, false, false, false, false, false, false];

  arryData: any = [];
  arrynumbers: any = [];

  uncheckCheckbox(seat: any, i: any) {
    seat.checked = false;
    seat.value = 'available';
    this.selected = 'null';
    this.checkboxValue[i] = false;
    this.arryData[i] = '';
    console.log(this.arryData);
  }

  bookSlot(seat: any, i: any) {
    if(this.name !== "" && this.number !== ""){
    seat.value = this.name;
    this.arryData[i] = this.name;
    this.arrynumbers[i] = this.number;
    this.booked = true;
    this.checkboxValue[i] = true;
    setTimeout(() => {
      this.booked = false;
      this.selected = false;
      this.name = '';
    }, 1000);
  }
  }
}
