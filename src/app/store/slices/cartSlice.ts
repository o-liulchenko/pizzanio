import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IPizza } from "../../api/pizzaAPI";

interface CartState {
  _id: string;
  products: IPizza[];
  totalPrice: number;
}

const getInitState: () => CartState = () => {
  const maybeCart = localStorage.getItem("cart");
  !maybeCart &&
    localStorage.setItem(
      "cart",
      JSON.stringify({
        _id: '1',
        products: [],
        totalPrice: 0,
      })
    );
    return maybeCart && JSON.parse(maybeCart)
};

export const CartSlice = createSlice({
  name: "cart",
  initialState: getInitState(),
  reducers: {
    addProductToCart: (state, action: PayloadAction<IPizza>) => {
      state.products.push(action.payload);
      state.totalPrice += action.payload.price;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.products.find((product) => product._id === action.payload)
    },
  },
});

export const { addProductToCart } = CartSlice.actions;

export const SelectTotalPrice = (state: RootState) => state.cart.totalPrice;

export default CartSlice.reducer;
