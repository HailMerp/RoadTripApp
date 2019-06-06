import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileUrl:string ="https://user-data-b6c8a.firebaseio.com/userProfile.json";
  avatarUrl: string = "https://picsum.photos/200/300/?random";
  constructor(
    private http: HttpClient
  ) { }
  getProfile (){
    return this.http.get(this.profileUrl)
      .pipe(
    catchError(this.handleError('getProfile', []))
      );
  }
  updateProfile (userProfile) {
    return this.http.put(this.profileUrl, userProfile).pipe(
      catchError(this.handleError<any>('updateProfile'))
    );
  }
  getAvatar(): Observable<Blob> {
    return this.http.get(this.avatarUrl, { responseType: 'blob' }).pipe(
      catchError(this.handleError<any>('getAvatar'))
    );
  }
<<<<<<< HEAD
  updateAvatar(url: String) {
   return this.http.post(this.profileUrl,url).pipe(
    catchError(this.handleError<any>('updateProfile'))
  );
=======
  updateAvatar(file: Blob): void {
   console.log(file)
>>>>>>> 45683cb149f85b6f95b2e514746893e2f4ba7cc9
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
