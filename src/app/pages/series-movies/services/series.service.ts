import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  
  constructor(private httpClient: HttpClient) { }

  getAllMovies(){
    this.httpClient.get(environment.apiUrl)
  }
}
