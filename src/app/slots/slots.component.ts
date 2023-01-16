import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
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
import { FormsModule } from '@angular/forms';

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
  numberOfPlayers: any;
  slotIndex: any;
  editIcon = false;
  loadingSlots = true;
  addedPlayers: any;
  totalPlayers: any;
  slotName: any;
  showLimitError = false

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
  SlotsIndex = [];

  getData(date: any) {
    this.isLoading = true;
    let d = { date: date };
    this.dataService
      .post('/public/api/slot/booking_date', d, false)
      .subscribe((res: any) => {
        console.log(res);
        this.timeSlots = res;
        this.isLoading = false;
      });
  }
  userData: any;
  jsonUserData: any;
  // Post DATA
  sendData() {
    this.userData = localStorage.getItem('booking_form_with_date');
    const jsonUserData = JSON.parse(this.userData);
    // const url = '/public/api/slot_booked';
    const data = {
      name: jsonUserData.name,
      email: jsonUserData.email,
      phone_no: jsonUserData.phone_no,
      no_of_players: jsonUserData.no_of_players,
      date: jsonUserData.date,
      time_slot: jsonUserData.slot_id,
      slotName: this.slotName,
      player_info: this.arr,
    };
    const token = false;
    localStorage.setItem('booking_final', JSON.stringify(data));
    // this.dataService.post(url, data, token).subscribe((response) => {
    //   console.log(response)
    // });
  }
  // Post DATA

  seats = [
    {
      name: 'Slot 1',
      label: 'slot-1',
      checked: false,
      value: 'Available',
      id: 0,
    },
    {
      name: 'Slot 2',
      label: 'slot-2',
      checked: false,
      value: 'Available',
      id: 1,
    },
    {
      name: 'Slot 3',
      label: 'slot-3',
      checked: false,
      value: 'Available',
      id: 2,
    },
    {
      name: 'Slot 4',
      label: 'slot-4',
      checked: false,
      value: 'Available',
      id: 3,
    },
    {
      name: 'Slot 5',
      label: 'slot-5',
      checked: false,
      value: 'Available',
      id: 4,
    },
    {
      name: 'Slot 6',
      label: 'slot-6',
      checked: false,
      value: 'Available',
      id: 5,
    },
    {
      name: 'Slot 7',
      label: 'slot-7',
      checked: false,
      value: 'Available',
      id: 6,
    },
    {
      name: 'Slot 8',
      label: 'slot-8',
      checked: false,
      value: 'Available',
      id: 7,
    },
    {
      name: 'Slot 9',
      label: 'slot-9',
      checked: false,
      value: 'Available',
      id: 8,
    },
    {
      name: 'Slot 10',
      label: 'slot-10',
      checked: false,
      value: 'Available',
      id: 9,
    },
    {
      name: 'Slot 11',
      label: 'slot-11',
      checked: false,
      value: 'Available',
      id: 10,
    },
    {
      name: 'Slot 12',
      label: 'slot-12',
      checked: false,
      value: 'Available',
      id: 11,
    },
    {
      name: 'Slot 13',
      label: 'slot-13',
      checked: false,
      value: 'Available',
      id: 12,
    },
    {
      name: 'Slot 14',
      label: 'slot-14',
      checked: false,
      value: 'Available',
      id: 13,
    },
    {
      name: 'Slot 15',
      label: 'slot-15',
      checked: false,
      value: 'Available',
      id: 14,
    },
    {
      name: 'Slot 16',
      label: 'slot-16',
      checked: false,
      value: 'Available',
      id: 15,
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

    if(this.addedPlayers > this.totalPlayers || this.addedPlayers !== this.totalPlayers ){
     this.showLimitError= true;
    }

  else{
    for (let i = 0; i < this.arrynumbers.length; i++) {
      if (this.arrynumbers[i] != undefined) {
        this.arr.push({
          player: this.arryData[i],
          number: this.arrynumbers[i],
          slot_index: parseInt(this.arrySlotIndex[i]),
        });
      }
    }
    this.sendData();
    this.goToPage(pageName);
    this.modalService.dismissAll(content);
  }
  }

  closeModal(content: any) {
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
  getInputValue3(slotName: HTMLInputElement) {
    this.slotName = slotName.value;
  }

  open(content: any, inputElement: any, slotId: any, slotName: any) {
    this.loadingSlots = true;
    const condate = this.getInputValue(inputElement);
    this.getInputValue2(slotId);
    this.getInputValue3(slotName);
    let slot: any = localStorage.getItem('booking_form');
    let json_slot = JSON.parse(slot);
    let data: any = {
      name: json_slot.name,
      email: json_slot.email,
      phone_no: json_slot.phone_no,
      no_of_players: json_slot.no_of_players,
      date: this.selected_date,
      slot_id: this.selectedTimeId,
      slotName: this.slotName,
    };

    // slot request

    this.dataService
      .post(
        '/public/api/slot/slot_index',
        { date: this.selected_date, id: this.selectedTimeId },
        false
      )
      .subscribe((res: any) => {
        console.clear();
        this.SlotsIndex = res;
        this.SlotsIndex.forEach((element: any) => {
          $('#' + element.index + 'a')
            .parent()
            .empty()
            .addClass(`${element.status == 'Booked' ? 'slot_booked' : 'slot_box2'}`)
            .append(
              `<span style="font-size: 15px;line-height: 1.2;text-align: center;padding-top: 19px;" >${element.status == "Booked" ? element.name :  'Expires at <span style="color:#4aff3e;padding-top:4px;font-size: 12px;">'+element.exp_date+'</span>'}</span>`
            );
        });
        this.loadingSlots = false;
      });

    // slot request

    localStorage.setItem('booking_form_with_date', JSON.stringify(data));
    this.userData = localStorage.getItem('booking_form_with_date');
    const josnDataP = JSON.parse(this.userData);

    console.log(josnDataP.no_of_players);
    this.totalPlayers = josnDataP.no_of_players ?? 0;

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
    let slot: any = localStorage.getItem('booking_form');
    let json_slot = JSON.parse(slot);
    this.numberOfPlayers = json_slot.no_of_players;

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
  checkboxValue = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  checkBoxChecked: any;

  arryData: any = [];
  arrynumbers: any = [];
  arrySlotIndex: any = [];
  addedPlayersArr :any = [];
  uncheckCheckbox(seat: any, i: any) {
    seat.checked = false;
    seat.value = 'Available';
    this.selected = 'null';
    this.checkboxValue[i] = false;
    this.arryData.splice(i, 1);
    this.arrynumbers.splice(i, 1);
    this.addedPlayersArr.splice(1,1)
    console.log(this.arryData);
    this.addedPlayers = this.addedPlayersArr.length;
    this.submited = true;
  }

  submited = true;

  bookSlot(seat: any, i: any) {
    if (this.name !== undefined && this.name !== undefined && this.name !== "" && this.name !== "") {
      
      this.editIcon = true;
      seat.value = this.name;
      this.arryData[i] = this.name;
      this.arrynumbers[i] = this.number;
      this.arrySlotIndex[i] = i;
      this.booked = true;
      this.checkboxValue[i] = true;
      this.submited = true;
      let a  = [];

      console.log(this.arrynumbers.length);
      for (let i = 0; i < this.arrynumbers.length; i++) {
        if (this.arrynumbers[i] != undefined) {
          console.log(this.arrynumbers[i]);
         
           a.push({number:this.number[i] });
        }
      }

      this.addedPlayers = a.length;
      // console.log(this.addedPlayersArr)
      console.log(a)


      setTimeout(() => {
        this.booked = false;
        this.selected = false;
        this.name = '';
        this.number = '';
      }, 500);
    }
    if (this.name == undefined || this.number == undefined || this.number == "" || this.name == "") {
      this.submited = false;
    }
  }

  // back to booking
  @Output() data = new EventEmitter();
  // back to booking
  backToForm() {
    this.data.emit('false');
  }

  // disable Time Slots
}
