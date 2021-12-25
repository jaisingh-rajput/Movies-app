import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesComponent } from './Components/favourites/favourites.component';
import { HomePageComponent } from './Components/home-page/home-page.component';

const routes: Routes = [
  {path:'favourites', component:FavouritesComponent},
  {path:'',component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
