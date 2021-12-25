import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class MovieDataService {
  url="https://api.themoviedb.org/3/movie/popular?api_key=d7a2ef9097433f7accf7c2bed45dca6d&language=en-US&page=1"
  
  constructor(private http:HttpClient) {
     }
  
  movies():Observable<any>{
    return this.http.get<any>(this.url);
  }
  getmovies(event:any):Observable<any>{
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/popular?api_key=d7a2ef9097433f7accf7c2bed45dca6d&language=en-US&page=${event}`)
  }
}
