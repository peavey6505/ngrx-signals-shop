import { signalStore, withComputed, withState } from '@ngrx/signals';
import { initialShopSlice } from './shop.slice';
import { computed } from '@angular/core';
import { buildCartVm, buildProductListVm } from './shop-vm.builder';

export const ShopStore = signalStore(
  { providedIn: 'root' }, //singleton for whole app
  withState(initialShopSlice), // set init state
  withComputed((store) => ({
    productListVm: computed(() =>
      buildProductListVm(
        store.products(),
        store.searchWord(),
        store.cartQuantities()
      )
    ),
    cartVm: computed(() =>
      buildCartVm(
        store.products(),
        store.cartQuantities(),
        store.taxRate(),
        store.cartVisible()
      )
    ),
  }))
);
