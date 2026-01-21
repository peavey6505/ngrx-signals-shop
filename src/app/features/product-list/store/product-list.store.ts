import { signalStore, withState } from "@ngrx/signals";
import { initialProductListSlice } from "./product-list.slice";

export const ProductListStore = signalStore(
    withState(initialProductListSlice), 
)