import { Injectable } from '@angular/core';
import { IMovie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: IMovie[] = [
    {
      id: 1,
      name: 'gone with the wind',
      year: '1955'
    },
    {
      id: 2,
      name: 'sound of music',
      year: '1958'
    },
    {
      id: 3,
      name: 'dracula',
      year: '1960'
    },
    {
      id: 4,
      name: 'silence of the lambs',
      year: '1962'
    },


  ];
   getMovies = () => this.movies;
}
