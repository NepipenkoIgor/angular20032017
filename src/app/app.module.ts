import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';

import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { UserFilterPipe } from './common/pipes/user-filter.pipe';
import { TooltipDirective } from './common/directives/tooltip.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    UserFilterPipe,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    SearchModule,
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
