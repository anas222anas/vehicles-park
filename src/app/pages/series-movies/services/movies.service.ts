import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Movie } from '../components/series-movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private url = environment.apiUrl + 'movies'
  readonly movies = new BehaviorSubject<Movie[]>([]);
  constructor(private httpClient: HttpClient) { }

  getAllMovies() {
    this.httpClient.get<Movie[]>(this.url).subscribe(data => {
      this.movies.next([...data])
    })
  }
  
  addMovies(data: Movie) {
    this.httpClient.post<Movie[]>(this.url, data).subscribe(succ => this.getAllMovies())
  }

  editMovies(data: Movie) {
    this.httpClient.put<Movie>(this.url + '/' + data.id, data).subscribe(succ => this.getAllMovies())
  }
}
