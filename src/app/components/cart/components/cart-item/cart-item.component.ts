import { Component, computed, input } from '@angular/core';
import { CartItemVm } from '../../view-model/cart-item.vm';
import { SharedModule } from '../../../../shared.module';
import { QuantityComponent } from "../../../quantity/quantity.component";

@Component({
  selector: 'app-cart-item',
  imports: [SharedModule, QuantityComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  readonly item = input.required<CartItemVm>();
  readonly image = computed(() => `images/${this.item().id}.png`);

}
