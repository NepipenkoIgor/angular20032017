import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';

import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
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
