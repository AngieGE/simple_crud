import { Component } from '@angular/core';
import {ActivationStart, Router} from '@angular/router';
import {NavigationEnd} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  rout: string;

  constructor(private router: Router){
    //console.log('EN APP COMPONENT');
    //localStorage.setItem('rout', router.url) ;
    //this.rout = localStorage.getItem('rout');
    router.events.subscribe((val:ActivationStart) => {
      // see also
      //console.log( router.url);
      localStorage.setItem('rout', router.url) ;
      this.rout = localStorage.getItem('rout');

    });

  }



}

