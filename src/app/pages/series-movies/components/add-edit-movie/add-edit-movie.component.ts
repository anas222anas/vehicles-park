import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Movie, ResolutionOption, ResolutionType, YearsOption } from '../series-movies.model';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs/internal/Subscription';
import { MoviesService } from '../../services/movies.service';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';

@Component({
  selector: 'app-add-edit-movie',
  templateUrl: './add-edit-movie.component.html',
  styleUrl: './add-edit-movie.component.scss'
})
export class AddEditMovieComponent implements OnInit {

  private fb = inject(FormBuilder);
  protected movieForm: MovieFormGroup;
  subscription: Subscription;
  private moviesService = inject(MoviesService);
  protected movies: Movie[] = [];
  protected resolutionOption = ResolutionOption
  protected yearsOption = YearsOption

  constructor(public dialogRef: MatDialogRef<AddEditMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {
    this.moviesService.getAllMovies();
    this.subscription = new Subscription();
    this.movieForm = this.fb.group({
      id: this.fb.control<string | null>(null, { validators: [Validators.required] }),
      realName: this.fb.control<string | null>(null, { validators: [Validators.required] }),
      displayName: this.fb.control<string | null>(null),
      releaseDate: this.fb.control<string | null>('2010', { validators: [Validators.required] }),
      resolution: this.fb.control<ResolutionType>('4K', { validators: [Validators.required] }),
    })

  }

  ngOnInit(): void {
    if (this.data) {
      this.movieForm.setValue(this.data)
    }
    else {
      this.moviesService.movies.pipe(distinctUntilChanged()).subscribe(data => {
        this.movies = [...data];
        this.movieForm.controls.id.setValue((+((this.movies.at(-1)?.id) || 0) + 1).toString())
      })
    }

  }
  onSubmit() {
    this.movieForm.markAllAsTouched();
    this.movieForm.markAsDirty()
    if (this.movieForm.invalid)
      return
    this.dialogRef.close(this.movieForm.value)

  }
  onClose() {
    this.dialogRef.close()
    // If inside a MatDialog:
    // this.dialogRef.close();
  }
}
type MovieFormGroup = FormGroup<{
  id: FormControl<string | null>;
  realName: FormControl<string | null>;
  displayName: FormControl<string | null>;
  releaseDate: FormControl<string | null>;
  resolution: FormControl<ResolutionType>;
}>;
