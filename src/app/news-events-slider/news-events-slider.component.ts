
import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news-events-slider',
  templateUrl: './news-events-slider.component.html',
  styleUrls: ['./news-events-slider.component.css'],
  standalone: true,
  imports: [NgbCarouselModule, NgFor, FormsModule],
})
export class NewsEventsSliderComponent {
  paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;
  news = [
    {
      news:'1',
      img: "../../../assets/images/paint-ball.jpg",
      title:'Paint Ball',
      newsText:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Sunt laborum pariatur molestias error. Deserunt quisquam,
      cum tempora suscipit molestiae error est nemo et aut
      excepturi fugit eaque quis nobis fuga.`
  },
    {
      news:'2',
      img: "../../../assets/images/indoor-cricket.jpg",
      title:'Indoor Cricktet',
      newsText:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Sunt laborum pariatur molestias error. Deserunt quisquam,
      cum tempora suscipit molestiae error est nemo et aut
      excepturi fugit eaque quis nobis fuga.`
  },
    {
      news:'3',
      img: "../../../assets/images/GelBlaster.webp",
      title:'Gel Blaster',
      newsText:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Sunt laborum pariatur molestias error. Deserunt quisquam,
      cum tempora suscipit molestiae error est nemo et aut
      excepturi fugit eaque quis nobis fuga.`
    },
    {
      news:'4',
      img: "../../../assets/images/range.jpg",
      title:'Airsoft Range',
      newsText:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Sunt laborum pariatur molestias error. Deserunt quisquam,
      cum tempora suscipit molestiae error est nemo et aut
      excepturi fugit eaque quis nobis fuga.`
    },
    {
      news:'5',
      img: "../../../assets/images/archery.jpg",
      title:'Archery',
      newsText:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
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

