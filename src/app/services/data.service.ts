import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public global_url:any = "https://webhook.site/";

 
  constructor(public http: HttpClient) {}

  post(url:any,data:any,token:any){
   return  this.http.post(this.global_url+ url,data);
   } 

}
