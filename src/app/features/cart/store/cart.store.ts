import { signalStore, withState } from "@ngrx/signals";
import { initialCartSlice } from "./cart.slice";

export const CartStore = signalStore(
    withState(initialCartSlice), 
)