import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';

import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { UserFilterPipe } from './common/pipes/user-filter.pipe';
import { TooltipDirective } from './common/directives/tooltip.directive';

import { UsersService } from './common/services/users.service';
import { environment } from '../environments/environment';
import { DOMAIN } from './config';
import { ModalComponent } from './common/components/modal/modal.component';
import { ModalService } from './common/components/modal/modal.service';
import { FullCardComponent } from './full-card/full-card.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    UserFilterPipe,
    TooltipDirective,
    ModalComponent,
    FullCardComponent
  ],
  imports: [
    BrowserModule,
    SearchModule,
    MaterialModule,
    HttpModule
  ],
  entryComponents: [
    FullCardComponent
  ],
  providers: [
    ModalService,
    {
      provide: UsersService, // Type, string, token
      useClass: UsersService
    },
    {
      provide: DOMAIN, // Type, string, token
      useValue: environment.domain,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
