import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css'],
  standalone: true,
  imports: [NgbCarouselModule, NgFor, FormsModule],
})

export class MainSliderComponent {
  paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;
  slides = [
    {
      slide:'1',
      img: "../../../assets/images/paint-ball.jpg",
      title:'Paint Ball',
      bannerText:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Sunt laborum pariatur molestias error. Deserunt quisquam,
      cum tempora suscipit molestiae error est nemo et aut
      excepturi fugit eaque quis nobis fuga.`
  },
    {
      slide:'2',
      img: "../../../assets/images/indoor-cricket.jpg",
      title:'Indoor Cricktet',
      bannerText:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Sunt laborum pariatur molestias error. Deserunt quisquam,
      cum tempora suscipit molestiae error est nemo et aut
      excepturi fugit eaque quis nobis fuga.`
  },
    {
      slide:'3',
      img: "../../../assets/images/GelBlaster.webp",
      title:'Gel Blaster',
      bannerText:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Sunt laborum pariatur molestias error. Deserunt quisquam,
      cum tempora suscipit molestiae error est nemo et aut
      excepturi fugit eaque quis nobis fuga.`
    },
    {
      slide:'4',
      img: "../../../assets/images/range.jpg",
      title:'Airsoft Range',
      bannerText:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Sunt laborum pariatur molestias error. Deserunt quisquam,
      cum tempora suscipit molestiae error est nemo et aut
      excepturi fugit eaque quis nobis fuga.`
    },
    {
      slide:'5',
      img: "../../../assets/images/archery.jpg",
      title:'Archery',
      bannerText:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Sunt laborum pariatur molestias error. Deserunt quisquam,
      cum tempora suscipit molestiae error est nemo et aut
      excepturi fugit eaque quis nobis fuga.`
    },
  ]
  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;
	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}
  onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}
}
