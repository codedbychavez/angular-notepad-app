import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StickyService {
  private baseUrl: any;
    
  

  constructor(private httpClient: HttpClient) { 
    this.baseUrl = environment.restApi.uri;
   }

   createSticky(data: any) {
     return this.httpClient.post<any>(
       this.baseUrl + '/sticky/create', data
     )
   } 

   updateSticky(data: any) {
    return this.httpClient.post<any>(
      this.baseUrl + '/sticky/update', data
    )
  } 

  deleteSticky(stickyId: any) {
    return this.httpClient.post(
      this.baseUrl + '/sticky/delete', stickyId
    )
  } 

  // TODO: Change to post for user
  getStickies() {
    return this.httpClient.get(
      this.baseUrl + '/sticky/all',
    )
  } 

}
