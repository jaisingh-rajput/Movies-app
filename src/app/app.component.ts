import { Component } from '@angular/core';
import { CrudService } from "./Services/crud.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-app';
  movie:Array<any>
  // favouritesArr:any[];
  constructor( public service:CrudService){
    this.movie=new Array<any>()
    this.service.fetchProducts().subscribe(
      (response)=>{
        const data=JSON.stringify(response)
        this.movie=JSON.parse(data)
      },
      (err)=>console.log(err)
    )
  }
}
