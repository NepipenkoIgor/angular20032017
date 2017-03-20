import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MaterialModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [SearchComponent],
  declarations: [SearchComponent]
})
export class SearchModule {
}
