import { OnInit, Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDXX7P9cbZ-qh2xohvNdsdZvQiJ26q6DC8',
      authDomain: 'ng-recipe-book-d8cdf.firebaseapp.com',
    });
  }
}
