import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
 import * as jspdf from 'jspdf';
 import html2canvas from 'html2canvas';
@Component({
  selector: 'app-proceed-form',
  templateUrl: './proceed-form.component.html',
  styleUrls: ['./proceed-form.component.css']
})

export class ProceedFormComponent {

name : any;
email: any;
number:any;
date:any;
slot:any;
json_booking_final : any
price = 2500;
totalPrice = 0;
  userData:any;
  responseData: any;
  bookingConfirm = false
  slotName : any
  remainingTime : any;
  config : any

constructor(  private dataService: DataService){}

  ngOnInit(): void {
   this.getBookingDetails()
  //  this.sendData()
  this.bookingConfirm = false
  
  }

  
  getBookingDetails(){
    let booking_final: any = localStorage.getItem('booking_final');
    this.json_booking_final = JSON.parse(booking_final);
    this.name  =   this.json_booking_final.name
    this.email  =   this.json_booking_final.email
    this.number  =   this.json_booking_final.phone_no
    this.date  =   this.json_booking_final.date
    this.slot  =   this.json_booking_final.slotName
    this.totalPrice = this.json_booking_final.player_info.length * 2500
  }

  sendData(){
    const data = {
      name: this.json_booking_final.name,
      email: this.json_booking_final.email,
      phone_no: this.json_booking_final.phone_no,
      no_of_players: this.json_booking_final.no_of_players,
      date:  this.json_booking_final.date,
      time_slot: this.json_booking_final.time_slot,
      player_info: this.json_booking_final.player_info,
      slot_name: this.json_booking_final.slotName
    };
    console.log(data)
    localStorage.clear();
    this.dataService.post('/public/api/slot_booked', data, false).subscribe((response) => {
      this.bookingConfirm = true
      this.responseData = response;
      this.remainingTime = this.responseData[0].hours
      this.runTimer()
      
    }); 
    }

    runTimer(){
      this.config = {
        leftTime: this.remainingTime * 60 * 60,
        template: '$!h!:!m!:!s!',
        notify: [60, 30, 10, 5, 2, 1]
      };
    }


//  pdfSave(){
//   let pdf = new jsPDF();
//   pdf.html(<HTMLBodyElement>document.getElementById('myElement'), {
//     callback: function (pdf) {
//       pdf.save('screenshot.pdf');
//     }
//   });
//  }


 pdfSave(myElement:any)
 {const printContent:any = document.getElementById("myElement");
 const WindowPrt:any = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
 WindowPrt.document.write(printContent.innerHTML);
 WindowPrt.document.close();
 WindowPrt.focus();
 WindowPrt.print();
//  WindowPrt.close();

 }
  
}
 