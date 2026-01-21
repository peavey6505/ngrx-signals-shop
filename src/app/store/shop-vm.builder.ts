import { CartItemVm } from '../features/cart/view-model/cart-item.vm';
import { CartQuantities } from '../models/cart-quantities.model';
import { Product } from '../models/product.model';
import { ShopVm } from './shop.vm';

export function buildShopVm(
  cartVisible: boolean,
  cartQuantities: CartQuantities,
): ShopVm {
  const itemsCount = Object.entries(cartQuantities).length;

  return {
    isCartActive: itemsCount > 0,
    isCartVisible: cartVisible,
    cartItemsCount: itemsCount,
  };
}
