import { Component, signal } from '@angular/core';
import { ALL_PRODUCTS } from '../../data/all-products';
import { ItemCardComponent } from "../item-card/item-card.component";
import { sampleProductItems } from './view-model/product-item.vm';

@Component({
  selector: 'app-items-list',
  imports: [ItemCardComponent],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss'
})
export class ItemsListComponent {
  readonly products = signal(sampleProductItems);

}
