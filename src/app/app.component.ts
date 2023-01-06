import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'marksman-arena';

  
ngOnInit(): void {
  
  setTimeout(()=>{                         
    showPage();
}, 3000);
function showPage() {
  var preload = document.getElementById("preloader-background")
  preload!.style.display  = "none";
  var page  = document.getElementById("pageContent")
  page!.style.display = "block";
}


}
}
