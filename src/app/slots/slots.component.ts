import { Component, ViewChild } from '@angular/core';
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
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-slots',
  standalone: true,
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css'],
  imports: [NgbDatepickerModule, DatePickerComponent, CommonModule],
})
export class SlotsComponent {
  @ViewChild('closebutton') closebutton: any;
  closeResult = '';
  selectedTimeId: any;
  selected_date: any;

  constructor(
    public modalService: NgbModal,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  timeSlots = [];

  getData() {
    this.dataService
      .get('/public/api/slot/index', false)
      .subscribe((res: any) => {
        console.log(res.data);
        this.timeSlots = res.data;
      });
  }

  seats = [
    {
      name: 'Slot 1',
      label: 'slot-1',
    },
    {
      name: 'Slot 2',
      label: 'slot-2',
    },
    {
      name: 'Slot 3',
      label: 'slot-3',
    },
    {
      name: 'Slot 4',
      label: 'slot-4',
    },
    {
      name: 'Slot 5',
      label: 'slot-5',
    },
    {
      name: 'Slot 6',
      label: 'slot-6',
    },
    {
      name: 'Slot 7',
      label: 'slot-7',
    },
    {
      name: 'Slot 8',
      label: 'slot-8',
    },
  ];
  seatsRow2 = [
    {
      name: 'Slot2 1',
      label: 'slot2-1',
    },
    {
      name: 'Slot2 2',
      label: 'slot2-2',
    },
    {
      name: 'Slot2 3',
      label: 'slot2-3',
    },
    {
      name: 'Slot2 4',
      label: 'slot2-4',
    },
    {
      name: 'Slot2 5',
      label: 'slot2-5',
    },
    {
      name: 'Slot2 6',
      label: 'slot2-6',
    },
    {
      name: 'Slot2 7',
      label: 'slot2-7',
    },
    {
      name: 'Slot2 8',
      label: 'slot2-8',
    },
  ];

  checkseats() {
    // prompt('Enter Name')

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

    console.log(this.selectedTime, this.selectedDate, this.selectedTimeId);
    this.goToPage(pageName);
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
    this.selectedDate = ` ${Object.values(date)[2]}-${mS[month]}-${
      Object.values(date)[0]
    }`;
    this.selected_date = ` ${Object.values(date)[2]}-${
      Object.values(date)[1]
    }-${Object.values(date)[0]}`;
  }
}
