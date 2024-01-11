import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../types/product';

const storedCart = localStorage.getItem('cartProducts');
const totalCarts = localStorage.getItem('totalCarts');

type CartItem = Product & { quantity: number };

type CartState = {
  items: CartItem[],
  total: number,
};

const calculateTotal = (items: CartItem[]) => {
  return items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
};

const cartState: CartState = {
  items: storedCart ? JSON.parse(storedCart) : [],
  total: totalCarts ? JSON.parse(totalCarts) : 0,
};

const saveToLocalStorage = (state: CartState) => {
  localStorage.setItem('cartProducts', JSON.stringify(state.items));
  localStorage.setItem('totalCarts', JSON.stringify(state.total));
};

export const cartProductsSlicer = createSlice({
  name: 'cartProducts',
  initialState: cartState,
  reducers: {
    setCartProducts: (state, action: PayloadAction<Product>) => {
      state.items.push({
        ...action.payload,
        quantity: 1,
      });
      state.total = calculateTotal(state.items);
      saveToLocalStorage(state);
    },
    deleteCartProducts: (state, action: PayloadAction<string>) => {
      const updatedItems = state.items.filter(
        itemToDelete => itemToDelete.id !== action.payload,
      );

      state.items = updatedItems;
      state.total = calculateTotal(state.items);
      saveToLocalStorage(state);
    },
    increaseQuantity: (state, action) => {
      const foundItem = state.items.find(item => item.id === action.payload);

      if (foundItem) {
        foundItem.quantity += 1;
        state.total = calculateTotal(state.items);
      }

      saveToLocalStorage(state);
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const foundItem = state.items.find(item => item.id === action.payload);

      if (foundItem && foundItem.quantity > 0) {
        foundItem.quantity -= 1;
        state.total = calculateTotal(state.items);
      }

      saveToLocalStorage(state);
    },
  },
});

export const {
  setCartProducts, deleteCartProducts, increaseQuantity, decreaseQuantity,
} = cartProductsSlicer.actions;

export default cartProductsSlicer.reducer;
