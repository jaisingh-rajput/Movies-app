import { Component, OnInit } from '@angular/core';
import { CrudService } from "../../Services/crud.service";
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})

export class FavouritesComponent implements OnInit {
  i: number;
  currentPage = 1
  totalItems: any
  genereids: { [key: number]: string } = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentry",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western"
  }


  constructor(private favourites: CrudService,
    public movieArr: AppComponent) {
    this.totalItems = this.movieArr.movie.length
    // this.favourites.fetchProducts().subscribe(
    //   (response)=>{
    //     const data=JSON.stringify(response)
    //     // console.log(data)
    //     this.movieArr.movie=JSON.parse(data)
    //     // console.log(this.fvmv[this.i+1].title)
    //     // console.log(filter(this.fvmv))
    //   },
    //   (err)=>console.log(err)
    // ) 

  }
  pageChange(event) {
    this.currentPage = event;
  }
  toDelete(i: any) {
    this.movieArr.movie.splice(i, 1)
    this.favourites.saveProducts(this.movieArr.movie).subscribe(
      (response) => console.log(response),
      (err) => console.log(err)
    )
  }

  ngOnInit(): void {
  }
  
  nameSearch:string=''

}
