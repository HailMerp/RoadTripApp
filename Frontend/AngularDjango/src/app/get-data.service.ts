import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  baseUrl:string="http://127.0.0.1:5000/";
  constructor(private httpClient: HttpClient) { }


  get_user(){
    this.httpClient.get(this.baseUrl + 'users_all').subscribe((user)=>{
        return user;
    });
}

get_user_details(firstName:string, lastName:string){
  this.httpClient.get(this.baseUrl + 'users').subscribe((userDetail)=>{
    return userDetail;
});

}


}
