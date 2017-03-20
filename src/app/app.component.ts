import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'ng-course';
  public width: number = 50;
  public logo: string = 'assets/images/logo.jpg';
  public placeholder: string = 'please search';
  public searchTerm: string;

  public constructor() {
  }

}
