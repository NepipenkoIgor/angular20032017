import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { SearchService } from './search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Input()
  public placeholder: string;

  // @Output()
  // public mySearch: EventEmitter<string> = new EventEmitter();
  public constructor(private _searchService: SearchService) {

  }

  public search(text: string): void {
    this._searchService.searchTerm = text;
  }

}
