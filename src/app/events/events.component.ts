import { Component } from '@angular/core';

import { DataService } from '../services/data.service'
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  constructor(public request: DataService) {

  }

  check(){
   
    let data = ["arsalan","ismail"];
   return this.request.post('3b27f7ed-f102-4034-8252-e9d13da7e8e0',data,false)
   
  }
}

