import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../common/services/product.service';
import { ModalService } from '../common/components/modal/modal.service';
import { FullCardComponent } from './card/full-card/full-card.component';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  public products: Product[];
  public searchTerm: string;


  public constructor(
    private _productService: ProductService,
    private _modalService: ModalService,
    private _searchService: SearchService,
  ) {
  }

  public ngOnInit(): void {
    this._productService.getProducts.subscribe((products: Product[]) => {
      this.products = products;
    });
    this._searchService.getSearchTerm$.subscribe((text: string) => {
      this.searchTerm = text;
    });
  }

  public openCard(product: Product): void {
    this._modalService.open({
      component: FullCardComponent,
      context: {
        product
      }
    });
  }

  public ngOnDestroy(): void {
    this._modalService.close();
  }
}
