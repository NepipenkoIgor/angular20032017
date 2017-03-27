import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { UsersService } from './common/services/users.service';
import { ModalService } from './common/components/modal/modal.service';
import { FullCardComponent } from './full-card/full-card.component';
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
  public users$: Observable<User[]>;

  public constructor(
    private _usersService: UsersService,
    private _modalService: ModalService,
  ) {
    this.users$ = this._usersService.getUsers();
  }

  public openCard(user: User): void {
    this._modalService.open({
      component: FullCardComponent,
      context: {
        user
      }
    });
  }

}
