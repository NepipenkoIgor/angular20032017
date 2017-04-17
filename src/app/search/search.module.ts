import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MaterialModule } from '@angular/material';
import { SearchService } from './search.service';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [SearchComponent],
  providers: [SearchService],
  declarations: [SearchComponent]
})
export class SearchModule {
}
