import { Component } from '@angular/core';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent {
  slides = [
    {
      slide:1,
      img: "../../../assets/images/paint-ball.jpg",
      title:'Paint Ball',
      bannerText:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Sunt laborum pariatur molestias error. Deserunt quisquam,
      cum tempora suscipit molestiae error est nemo et aut
      excepturi fugit eaque quis nobis fuga.`
  },
    {
      slide:2,
      img: "../../../assets/images/indoor-cricket.jpg",
      title:'Indoor Cricktet',
      bannerText:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Sunt laborum pariatur molestias error. Deserunt quisquam,
      cum tempora suscipit molestiae error est nemo et aut
      excepturi fugit eaque quis nobis fuga.`
  },
    {
      slide:3,
      img: "../../../assets/images/games.jpg",
      title:'X Live Games',
      bannerText:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Sunt laborum pariatur molestias error. Deserunt quisquam,
      cum tempora suscipit molestiae error est nemo et aut
      excepturi fugit eaque quis nobis fuga.`
    },
  ]
}
