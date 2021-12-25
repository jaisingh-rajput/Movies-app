import { Component, OnInit } from '@angular/core';
import { MovieDataService } from "../../Services/movie-data.service";
import { CrudService } from "../../Services/crud.service";
import { AppComponent } from 'src/app/app.component';
import { NavbarComponent } from "../navbar/navbar.component";


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  data: Array<any>
  pagenumber:any=1;
  totalRecords: any
  inCart: boolean;
  constructor(public MovieData: MovieDataService,
    private wishlist: CrudService,
    public arr:AppComponent,
    public search:NavbarComponent) {
      this.data = new Array<any>();
      this.MovieData.movies().subscribe((data)=>{
        this.data=data.results
        this.totalRecords=data.total_pages
        console.log(this.totalRecords)
        // console.log(this.MovieData.pagenumber)
      })

    // this.MovieData.movies().subscribe((data)=>(
    //   // console.warn(data)
    //   this.getmovie.push(data)
    // ))
  }
  handlePageChange(event:any) {
    // this.data = new Array<any>();
    this.pagenumber=event;
    this.MovieData.getmovies(event).subscribe((data)=>{
      this.data=data.results
    })
  }


  onSaveFavourites(items: any) {
    this.arr.movie.push(items);
    this.wishlist.saveProducts(this.arr.movie).subscribe(
      (response) => console.log(response),
      (err) => console.log(err)
    )


  }
  onDelete(i:any) {
    // console.log(i)
    // console.log(this.arr.movie.find(a =>a.id===i))
    // console.log(this.arr.movie.findIndex(a =>a.id===i))
    this.arr.movie.splice(this.arr.movie.findIndex(a=>a.id===i),1)
    // this.arr.movie.forEach( (item, index) => {
    //   if(item === i) this.arr.movie.splice(index,1);
    // });
    this.wishlist.saveProducts(this.arr.movie).subscribe(
      (response) => console.log(response),
      (err) => console.log(err)
    )
 }

 searchelement(id:any):any{
   
   for(var i=0;i<this.arr.movie.length;i++){
     if(id==this.arr.movie[i].id){
       return 1
     }
   }
 }

  ngOnInit(): void {
  }
  

}
