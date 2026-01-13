import { signalStore, withState } from '@ngrx/signals';
import { initialShopSlice } from './shop.slice';

export const ShopStore = signalStore(
  { providedIn: 'root' }, //singleton for whole app
  withState(initialShopSlice) // set init state
);
