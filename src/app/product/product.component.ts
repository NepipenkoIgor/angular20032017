import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
  ) { }

  public ngOnInit(): void {
    this._activatedRoute.data.subscribe((data: { title: string, product: Product }) => {
      console.log(data.product);
      console.log(data.title);
    });
  }

}
