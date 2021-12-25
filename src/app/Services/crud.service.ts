import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AngularFirestore } from "@angular/fire/compat/firestore";


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  firebaseurl='https://movies-app-angular-d0598-default-rtdb.firebaseio.com/Movies.json';
  constructor(private http:HttpClient) { }
  saveProducts(movies:any[]){
    // return this.http.post(this.firebaseurl,movies)
    return this.http.put(this.firebaseurl,movies)
  }
  fetchProducts(){
    return this.http.get(this.firebaseurl)
  }
  // deleteProducts(){
  //   return this.http.delete(this.firebaseurl)
  // }
}
