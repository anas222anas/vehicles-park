import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { distinctUntilChanged, Subscription } from 'rxjs';
import { Movie } from '../series-movies.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditMovieComponent } from '../add-edit-movie/add-edit-movie.component';

@Component({
  selector: 'app-movies-view',
  templateUrl: './movies-view.component.html',
  styleUrl: './movies-view.component.scss'
})
export class MoviesViewComponent implements OnInit {
  subscription: Subscription = new Subscription();
  private moviesService = inject(MoviesService);
  protected movies: Movie[] = [];


  displayedColumns: string[] = ['id', 'realName', 'releaseDate', 'resolution', 'actions'];
  dataSource = new MatTableDataSource<Movie>(this.movies);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private dialog: MatDialog) {
    this.moviesService.getAllMovies();
  }

  ngOnInit(): void {
    this.moviesService.movies.pipe(distinctUntilChanged()).subscribe(data => {
      this.movies = [...data];
      this.dataSource = new MatTableDataSource<Movie>(this.movies);
    })
  }
  addMovie() {
    this.dialog.open(AddEditMovieComponent, {
      width: 'fit-content',
      height: 'fit-content',
      disableClose: true
    }).afterClosed().subscribe((data: Movie) => {
      if (data) {
        this.moviesService.addMovies(data);
      }
    })
  }
  onEdit(data: Movie) {
    this.dialog.open(AddEditMovieComponent, {
      data: data,
      width: 'fit-content',
      height: 'fit-content',
      disableClose: true
    }).afterClosed().subscribe((data: Movie) => {
      if (data) {
        this.moviesService.editMovies(data);
      }
    })
}
}
