import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-card',
  templateUrl: './full-card.component.html',
  styleUrls: ['./full-card.component.css']
})
export class FullCardComponent {

  public user: User;

  public addLike(): void {
    this.user.likes = 1;
  }

  public dislike(): void {
    this.user.likes = 0;
  }
}
