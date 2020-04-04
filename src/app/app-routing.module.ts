import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {MovielistComponent} from './movielist/movielist.component';
import {HomePageComponent} from './home-page/home-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'movies',
    component: MovielistComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent
  },
  { path: '**', redirectTo: '/' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
