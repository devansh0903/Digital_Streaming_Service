import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    title: ['', Validators.required],
    movieDesc: ['',Validators.required],
    releaseYear: ['',Validators.required,Validators.max(9999)],
    duration: ['',Validators.required,Validators.min(0),Validators.max(999)],
    rating: ['',Validators.required,Validators.max(5), Validators.min(0)]
  });
  constructor(private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  OnSubmit(){
    window.alert("Movie is added");
  }

}
