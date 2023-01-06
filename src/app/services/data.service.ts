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
  public global_url:any = "https://www.backend.marksman.pk";

 
  constructor(public http: HttpClient) {}

  post(url:any,data:any,token:any){
   return  this.http.post(this.global_url+ url,data);
  } 
  
  get(url:any,token:any){
    return  this.http.get(this.global_url+url);
   }

}
