import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor() { }
  us: JSON;
  ngOnInit(): void {
    this.us = JSON.parse(localStorage.getItem('usuario'));
    console.log('el usuario es'  + this.us['usuario'] );
    console.log(localStorage.getItem('usuario'));
  }

}
