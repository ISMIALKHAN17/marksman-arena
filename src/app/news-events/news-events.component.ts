
import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-news-events',
  templateUrl: './news-events.component.html',
  styleUrls: ['./news-events.component.css']
})
export class NewsEventsComponent {


  ourNews = [
    {
      newsId :1,
      newsTitle: 'Indoor cricCup Winner',
      newsImage: '../../assets/images/cricup.jpg',
      shortDescription : ' Lorem ipsum dolor sit amet consectetur, adipisicing elit Corrupti at tempora',
      longDescription : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
      ipsum, illo libero veniam, ad ducimus animi esse facilis, repellat
      est eveniet alias sit iusto exercitationem? Odio alias magni atque
      eaque. Voluptatibus, velit eaque eveniet iure corrupti recusandae
      vitae aliquid fugit fugiat praesentium laboriosam minus blanditiis
      quidem suscipit ex commodi voluptate eum ipsum adipisci doloremque
      voluptatem! Eaque earum inventore dolorum enim? Est quis amet
      voluptatem exercitationem nisi. Labore inventore reiciendis itaque
      molestias omnis porro distinctio commodi obcaecati praesentium
      dolore, voluptatibus nam sit facilis ducimus aut, excepturi nostrum
      veritatis sequi laborum deleniti, voluptatum eos natus aliquid. Ab
      in praesentium, distinctio odio nam sapiente ad iste ipsa eveniet
      sed, voluptatum officia, vero aperiam fugit quod cum deleniti
      maiores eligendi? Voluptatum ex vitae veritatis eaque pariatur
      magnam adipisci fugit harum illo repellat aliquid corporis ullam ad
      dolores, similique id laborum necessitatibus quam ducimus alias eius
      incidunt! Maiores exercitationem id praesentium distinctio laborum
      cupiditate cumque et molestias incidunt ut! Voluptatibus nesciunt
      incidunt itaque recusandae nulla iure fugit eius velit, totam earum
      ipsum iusto rerum corrupti pariatur maiores illo eligendi cupiditate
      ab quos vero dicta molestiae doloremque expedita! Totam voluptatum
      sint nostrum doloribus ea consectetur odio hic. Labore id quo
      dolorum alias veritatis, eius voluptatum amet.`
    },
    {
      newsId :2,
      newsTitle: 'Paintball Cup Winner',
      newsImage: '../../assets/images/paintball3.webp',
      shortDescription : ' Lorem ipsum dolor sit amet consectetur, adipisicing elit Corrupti at tempora',
      longDescription : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
      ipsum, illo libero veniam, ad ducimus animi esse facilis, repellat
      est eveniet alias sit iusto exercitationem? Odio alias magni atque
      eaque. Voluptatibus, velit eaque eveniet iure corrupti recusandae
      vitae aliquid fugit fugiat praesentium laboriosam minus blanditiis
      quidem suscipit ex commodi voluptate eum ipsum adipisci doloremque
      voluptatem! Eaque earum inventore dolorum enim? Est quis amet
      voluptatem exercitationem nisi. Labore inventore reiciendis itaque
      molestias omnis porro distinctio commodi obcaecati praesentium
      dolore, voluptatibus nam sit facilis ducimus aut, excepturi nostrum
      veritatis sequi laborum deleniti, voluptatum eos natus aliquid. Ab
      in praesentium, distinctio odio nam sapiente ad iste ipsa eveniet
      sed, voluptatum officia, vero aperiam fugit quod cum deleniti
      maiores eligendi? Voluptatum ex vitae veritatis eaque pariatur
      magnam adipisci fugit harum illo repellat aliquid corporis ullam ad
      dolores, similique id laborum necessitatibus quam ducimus alias eius
      incidunt! Maiores exercitationem id praesentium distinctio laborum
      cupiditate cumque et molestias incidunt ut! Voluptatibus nesciunt
      incidunt itaque recusandae nulla iure fugit eius velit, totam earum
      ipsum iusto rerum corrupti pariatur maiores illo eligendi cupiditate
      ab quos vero dicta molestiae doloremque expedita! Totam voluptatum
      sint nostrum doloribus ea consectetur odio hic. Labore id quo
      dolorum alias veritatis, eius voluptatum amet.`
    },
    {
      newsId :3,
      newsTitle: 'Paintball Cup Winner',
      newsImage: '../../assets/images/paintball3.webp',
      shortDescription : ' Lorem ipsum dolor sit amet consectetur, adipisicing elit Corrupti at tempora',
      longDescription : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
      ipsum, illo libero veniam, ad ducimus animi esse facilis, repellat
      est eveniet alias sit iusto exercitationem? Odio alias magni atque
      eaque. Voluptatibus, velit eaque eveniet iure corrupti recusandae
      vitae aliquid fugit fugiat praesentium laboriosam minus blanditiis
      quidem suscipit ex commodi voluptate eum ipsum adipisci doloremque
      voluptatem! Eaque earum inventore dolorum enim? Est quis amet
      voluptatem exercitationem nisi. Labore inventore reiciendis itaque
      molestias omnis porro distinctio commodi obcaecati praesentium
      dolore, voluptatibus nam sit facilis ducimus aut, excepturi nostrum
      veritatis sequi laborum deleniti, voluptatum eos natus aliquid. Ab
      in praesentium, distinctio odio nam sapiente ad iste ipsa eveniet
      sed, voluptatum officia, vero aperiam fugit quod cum deleniti
      maiores eligendi? Voluptatum ex vitae veritatis eaque pariatur
      magnam adipisci fugit harum illo repellat aliquid corporis ullam ad
      dolores, similique id laborum necessitatibus quam ducimus alias eius
      incidunt! Maiores exercitationem id praesentium distinctio laborum
      cupiditate cumque et molestias incidunt ut! Voluptatibus nesciunt
      incidunt itaque recusandae nulla iure fugit eius velit, totam earum
      ipsum iusto rerum corrupti pariatur maiores illo eligendi cupiditate
      ab quos vero dicta molestiae doloremque expedita! Totam voluptatum
      sint nostrum doloribus ea consectetur odio hic. Labore id quo
      dolorum alias veritatis, eius voluptatum amet.`
    },
  ]


  mainNewsTitle = this.ourNews[0].newsTitle
  mainNewsLongText = this.ourNews[0].longDescription
  mainNewsImage = this.ourNews[0].newsImage
  changeData(event:any){

    var idAttr = event.srcElement.attributes.id;
    console.log(idAttr);
   
  }

}
