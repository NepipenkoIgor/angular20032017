import { Route } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { InfoComponent } from './info/info.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { ProductResolveService } from './product/product-resolve.service';
export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductsComponent,
      },
      {
        path: ':id',
        component: ProductComponent,
        resolve: {
          product: ProductResolveService
        },
        data: {
          title: 'Info about product'
        }
      },
    ]
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: '**',
    redirectTo: 'products',
  }
];

