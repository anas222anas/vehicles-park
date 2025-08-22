import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesViewComponent } from "./components/movies-view/movies-view.component";
import { SeriesViewComponent } from "./components/series-view/series-view.component";

const routes: Routes = [
    {
      path: 'movies-view',
      component: MoviesViewComponent,
    },
    {
      path: 'series-view',
      component: SeriesViewComponent,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SeriesMoviesRoutingModule { }
  