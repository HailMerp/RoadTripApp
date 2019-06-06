import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  let params = new HttpParams().set("firstName",firstName).set("lastName", lastName); //Create new HttpParams
  this.httpClient.get(this.baseUrl + 'users',{ params: params }).subscribe((userDetail)=>{
    return userDetail;
});
}


  add_user(firstName:string, lastName:string,dateOfBirth:string,dateOfJoining:string,country:string){
  this.httpClient.post(this.baseUrl + 'users',{"firstName": firstName, "lastName": lastName, "dateOfBirth": dateOfBirth, "dateOfJoining": dateOfJoining, "country": country})
    .subscribe(
    data  => {
    console.log("POST Request is successful ", data);
    },
    error  => {
    
    console.log("Error", error);
    
    }

    );
}

get_photos_all(){
  this.httpClient.get(this.baseUrl + 'photos_all').subscribe((photos)=>{
      return photos;
  });
}

get_photos_details(filename:string){
  let params = new HttpParams().set("filename",filename); //Create new HttpParams
  this.httpClient.get(this.baseUrl + 'photos',{ params: params }).subscribe((photos_details)=>{
    return photos_details;
});
}

add_photo(filename:string,latitude:number,longitude:number, tag:string,description:string,owner:string,blob_location:string){
  this.httpClient.post(this.baseUrl + 'photosAdd',    
  {"filename": filename, "latitude": latitude,"longitude": longitude,"tag": tag, "description": description,"owner": owner, "blob_location":blob_location}
  )
    .subscribe(
    data  => {
    console.log("POST Request is successful ", data);
    },
    error  => {
    
    console.log("Error", error);
    
    }

    );
}

get_tripsList(){
  this.httpClient.get(this.baseUrl + 'trips_all').subscribe((list)=>{
      return list;
  });
}

get_trips_details(name:string){
  let params = new HttpParams().set("name",name); //Create new HttpParams
  this.httpClient.get(this.baseUrl + 'trips',{ params: params }).subscribe((trips)=>{
    return trips;
});
}


addTrip(name:string,photos:string,owner:string){
  this.httpClient.post(this.baseUrl + 'tripsAdd',    
  {"name": name, "photos": photos,"owner": owner}  )
    .subscribe(
    data  => {
    console.log("POST Request is successful ", data);
    },
    error  => {
    
    console.log("Error", error);
    
    }

    );
}

getMarkers(){
  this.httpClient.get(this.baseUrl + '{user_id}\markers').subscribe((markers)=>{
      return markers;
  });
}


getTrips(){
  this.httpClient.get(this.baseUrl + '{user_id}\wycieczki').subscribe((trips)=>{
      return trips;
  });
}

addUser(firstName:string,lastName:string,dateOfBirth:string,dateOfJoining:string,country:string){
  this.httpClient.put(this.baseUrl + 'users\{user_id} ',    
  {"firstName": firstName, "lastName": lastName,"dateOfBirth": dateOfBirth,"dateOfJoining":dateOfJoining,"country":country}  )
    .subscribe(
    data  => {
    console.log("PUT Request is successful ", data);
    },
    error  => {
    
    console.log("Error", error);
    
    }

    );
}


addMarkerTag(latitude:number,longitude:number,tag:string,description:string){
  this.httpClient.put(this.baseUrl + 'users\{user_id}\markertags\{markertag_id}',    
  {"latitude": latitude, "longitude": longitude,"tag": tag,"description":description}  )
    .subscribe(
    data  => {
    console.log("PUT Request is successful ", data);
    },
    error  => {
    
    console.log("Error", error);
    
    }

    );
}



get_user_details(firstName:string, lastName:string){
  this.httpClient.get(this.baseUrl + 'users').subscribe((userDetail)=>{
    return userDetail;
});

}


}
