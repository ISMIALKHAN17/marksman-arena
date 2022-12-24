import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  items = [
    {
      cardBackground : '../../../assets/images/service1.png',
      cardLink : '#',
      cardCategory : 'Category',
      cardTitle : 'Paint Ball'
    },
    {
      cardBackground : '../../../assets/images/service2.png',
      cardLink : '#',
      cardCategory : 'Category',
      cardTitle : 'Net Cricket'
    },
    {
      cardBackground : '../../../assets/images/service3.jpg',
      cardLink : '#',
      cardCategory : 'Category',
      cardTitle : 'Tabel Tenis'
    },
    {
      cardBackground : '../../../assets/images/service4.jpg',
      cardLink : '#',
      cardCategory : 'Category',
      cardTitle : 'Snoker Club'
    },
    {
      cardBackground : '../../../assets/images/service5.jpg',
      cardLink : '#',
      cardCategory : 'Category',
      cardTitle : 'Indoor Badminton'
    },
    {
      cardBackground : '../../../assets/images/service6.jpg',
      cardLink : '#',
      cardCategory : 'Category',
      cardTitle : 'Merchandise'
    },
  ]
}
