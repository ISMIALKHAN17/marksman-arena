import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ngOnInit(): void {
    $(window).scroll(function(){
      let sticky = $('.sticky'),
       scroll  = $(window).scrollTop();
    
      if (scroll! >= 100) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });
    
  }
}
