import { Component } from '@angular/core';
import * as aos from 'aos';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  items = [
    {
      cardBackground : '../../../assets/images/service1.png',
      cardLink : 'coming-soon',
      cardCategory : 'Category',
      cardTitle : 'Paint Ball'
    },
    {
      cardBackground : '../../../assets/images/service2.png',
      cardLink : 'coming-soon',
      cardCategory : 'Category',
      cardTitle : 'Indoor Cricket'
    },
    {
      cardBackground : '../../../assets/images/GelBlaster.webp',
      cardLink : 'coming-soon',
      cardCategory : 'Category',
      cardTitle : 'Gel Blaster'
    },
    {
      cardBackground : '../../../assets/images/range.jpg',
      cardLink : 'coming-soon',
      cardCategory : 'Category',
      cardTitle : 'Airsoft Range'
    },
    {
      cardBackground : '../../../assets/images/archery.jpg',
      cardLink : 'coming-soon',
      cardCategory : 'Category',
      cardTitle : 'Archery'
    },
    {
      cardBackground : '../../../assets/images/service6.jpg',
      cardLink : 'coming-soon',
      cardCategory : 'Category',
      cardTitle : 'Merchandise'
    },
  ]
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    aos.init({disable: 'mobile'});//AOS - 2
    aos.refresh();
  }
}
