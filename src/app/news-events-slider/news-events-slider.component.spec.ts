import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEventsSliderComponent } from './news-events-slider.component';

describe('NewsEventsSliderComponent', () => {
  let component: NewsEventsSliderComponent;
  let fixture: ComponentFixture<NewsEventsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsEventsSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsEventsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
