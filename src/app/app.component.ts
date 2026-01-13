import { Component, signal } from '@angular/core';
import { SharedModule } from './shared.module';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { ItemsListComponent } from "./components/items-list/items-list.component";
import { CartComponent } from "./components/cart/cart.component";

@Component({
  selector: 'app-root',
  imports: [SharedModule, ToolbarComponent, ItemsListComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly isCartShowing = signal<boolean>(true);
}
