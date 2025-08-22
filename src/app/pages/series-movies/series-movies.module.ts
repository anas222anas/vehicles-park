import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesMoviesRoutingModule } from './series-movie-routing.module';
import { MoviesService } from './services/movies.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MoviesViewComponent } from './components/movies-view/movies-view.component';
import { SeriesViewComponent } from './components/series-view/series-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AddEditMovieComponent } from './components/add-edit-movie/add-edit-movie.component';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    MoviesViewComponent,
    SeriesViewComponent,
    AddEditMovieComponent,
  ],
  imports: [
    CommonModule,
    SeriesMoviesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    HttpClientModule,
    MatNativeDateModule,
    MatIconModule
  ],
  providers: [MoviesService]
})
export class SeriesMoviesModule { }
