import { Component, OnInit } from '@angular/core';
import { ProductService } from '../common/services/product.service';
import { ModalService } from '../common/components/modal/modal.service';
import { FullCardComponent } from './card/full-card/full-card.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Product[];

  public constructor(
    private _productService: ProductService,
    private _modalService: ModalService,
  ) {
  }

  public ngOnInit(): void {
    this._productService.getProducts.subscribe((products: Product[]) => {
      this.products = products;
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
}
