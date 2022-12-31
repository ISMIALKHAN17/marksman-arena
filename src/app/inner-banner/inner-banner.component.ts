import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inner-banner',
  templateUrl: './inner-banner.component.html',
  styleUrls: ['./inner-banner.component.css']
})
export class InnerBannerComponent {

  headerText!: any;
  bannerText!: any;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.headerText = data['headerText']
      this.bannerText = data['bannerText']
    });
  }
}
