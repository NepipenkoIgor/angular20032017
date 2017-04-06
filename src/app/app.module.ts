import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';

import { HeaderComponent } from './header/header.component';
import { CardComponent } from './products/card/card.component';
import { UserFilterPipe } from './common/pipes/user-filter.pipe';
import { TooltipDirective } from './common/directives/tooltip.directive';


import { ProductService } from './common/services/product.service';
import { CartService } from './common/services/cart.service';
import { environment } from '../environments/environment';
import { DOMAIN } from './config';
import { ModalComponent } from './common/components/modal/modal.component';
import { ModalService } from './common/components/modal/modal.service';
import { FullCardComponent } from './products/card/full-card/full-card.component';
import { CartComponent } from './cart/cart.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { ProductsComponent } from './products/products.component';

import { routes } from './routes';
import { MenuComponent } from './menu/menu.component';
import { InfoComponent } from './info/info.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { ProductResolveService } from './product/product-resolve.service';
import { OrderGuardService } from './order/order-guard.service';
import { PassValidatorDirective } from './common/directives/pass-validator.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    UserFilterPipe,
    TooltipDirective,
    ModalComponent,
    FullCardComponent,
    CartComponent,
    CartListComponent,
    ProductsComponent,
    MenuComponent,
    InfoComponent,
    OrderComponent,
    ProductComponent,
    PassValidatorDirective
  ],
  imports: [
    BrowserModule,
    SearchModule,
    MaterialModule,
    HttpModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [
    FullCardComponent,
    CartListComponent
  ],
  providers: [
    ModalService,
    CartService,
    ProductService,
    ProductResolveService,
    OrderGuardService,
    {
      provide: DOMAIN, // Type, string, token
      useValue: environment.domain,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
