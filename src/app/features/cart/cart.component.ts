import { Component, inject } from '@angular/core';
import { CartItemComponent } from "./components/cart-item/cart-item.component";
import { SharedModule } from '../../shared.module';
import { ShopStore } from '../../store/shop.store';

@Component({
  selector: 'app-cart',
  imports: [SharedModule, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss', 
  providers: []
})
export class CartComponent {
  readonly store = inject(ShopStore);

}
