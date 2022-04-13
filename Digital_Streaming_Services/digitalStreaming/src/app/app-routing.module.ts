import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { CommonModule } from '@angular/common';
import { EditMovieComponent } from './edit-movie/edit-movie.component';

const routes: Routes = [{path: '', component: ListMovieComponent  , pathMatch: 'full'},
{path: 'add-movie', component: AddMovieComponent},
{path: 'edit-movie', component:EditMovieComponent}];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
