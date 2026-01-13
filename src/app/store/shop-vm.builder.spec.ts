import { buildProductListVm, buildCartVm } from './shop-vm.builder';
import { Product } from '../models/product.model';

describe('shop-vm.builder', () => {
  let products: Product[];

  beforeEach(() => {
    products = [
      { id: '1', name: 'Apple', description: '', unitPrice: 1.0, ranking: 1 },
      { id: '2', name: 'Banana', description: '', unitPrice: 2.5, ranking: 2 },
      {
        id: '3',
        name: 'Green Apple',
        description: '',
        unitPrice: 3.2,
        ranking: 3,
      },
    ];
  });

  describe('buildProductListVm', () => {
    it('filters products by search word (case-insensitive, trimmed) and applies quantities', () => {
      const quantities = { '1': 2, '3': 5 } as Record<string, number>;
      const vm = buildProductListVm(products, '  ApPlE  ', quantities);

      expect(vm.productItems.length).toBe(2);

      const p1 = vm.productItems.find((p) => p.id === '1')!;
      const p3 = vm.productItems.find((p) => p.id === '3')!;

      expect(p1).toBeDefined();
      expect(p1.quantity).toBe(2);
      expect(p3).toBeDefined();
      expect(p3.quantity).toBe(5);

      // ensure non-matching product is not present
      expect(vm.productItems.find((p) => p.id === '2')).toBeUndefined();
    });

    it('returns all products when search word is empty and defaults missing quantities to 0', () => {
      const quantities = { '2': 4 } as Record<string, number>;
      const vm = buildProductListVm(products, '   ', quantities);

      expect(vm.productItems.length).toBe(3);

      const p1 = vm.productItems.find((p) => p.id === '1')!;
      const p2 = vm.productItems.find((p) => p.id === '2')!;
      const p3 = vm.productItems.find((p) => p.id === '3')!;

      expect(p1.quantity).toBe(0);
      expect(p2.quantity).toBe(4);
      expect(p3.quantity).toBe(0);
    });
  });

  describe('buildCartVm', () => {
    it('builds cart items only for products with a positive quantity and calculates totals', () => {
      const quantities = { '1': 2, '2': 0, '3': 3 } as Record<string, number>;
      const taxRate = 0.1; // 10%
      const cartVisible = true;

      const vm = buildCartVm(products, quantities, taxRate, cartVisible);

      // items: product 1 (2 * 1.0 = 2.0), product 3 (3 * 3.2 = 9.6)
      expect(vm.items.length).toBe(2);

      const item1 = vm.items.find((i) => i.id === '1')!;
      const item3 = vm.items.find((i) => i.id === '3')!;

      expect(item1.quantity).toBe(2);
      expect(item1.price).toBe(1.0);
      expect(item1.total).toBeCloseTo(2.0, 5);

      expect(item3.quantity).toBe(3);
      expect(item3.price).toBe(3.2);
      expect(item3.total).toBeCloseTo(9.6, 5);

      const subtotal = 2.0 + 9.6;
      expect(vm.subtotal).toBeCloseTo(subtotal, 5);
      expect(vm.tax).toBeCloseTo(subtotal * taxRate, 5);
      expect(vm.total).toBeCloseTo(subtotal + subtotal * taxRate, 5);

      expect(vm.isActive).toBeTrue();
      expect(vm.isVisible).toBeTrue();
    });

    it('returns empty cart when no quantities are positive', () => {
      const quantities = { '1': 0, '2': 0, '3': 0 } as Record<string, number>;
      const taxRate = 0.2;
      const cartVisible = false;

      const vm = buildCartVm(products, quantities, taxRate, cartVisible);

      expect(vm.items.length).toBe(0);
      expect(vm.subtotal).toBe(0);
      expect(vm.tax).toBe(0);
      expect(vm.total).toBe(0);
      expect(vm.isActive).toBeFalse();
      expect(vm.isVisible).toBeFalse();
    });
  });
});
