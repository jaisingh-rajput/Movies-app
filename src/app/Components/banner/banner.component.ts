import { Component, OnInit } from '@angular/core';
import { MovieDataService } from 'src/app/Services/movie-data.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  bannerdata:any
  constructor(public moviedata:MovieDataService) {
    // this.bannerdata=new Array<any>();
    this.moviedata.movies().subscribe((data)=>{
      this.bannerdata=data.results[0];
      console.log(this.bannerdata)
    })
   }

  ngOnInit(): void {
  }

}
