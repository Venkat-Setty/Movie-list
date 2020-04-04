import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { IMovie as movie } from '../models/movie';
@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  movies: movie[];
  constructor( private fetchMovies: MoviesService) { }
  
  ngOnInit() {
    this.movies = this.fetchMovies.getMovies();
  }

}
