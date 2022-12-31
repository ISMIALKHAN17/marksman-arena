import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ngOnInit(): void {

    $('.open').click(function(){
     $('.sidenav').css( "transform", "translatex(0px)")
     $('.sidenav ul').addClass("left_ani")
    })
    $('.closebtn1').click(function(){
      $('.sidenav').css( "transform", "translatex(-100%)")
     $('.sidenav ul').removeClass("left_ani")
    })
    

    $(window).scroll(function(){
      let sticky = $('.sticky'),
       scroll  = $(window).scrollTop();
    
      if (scroll! >= 100) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });
    
  }
}
