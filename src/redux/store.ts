import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './sliceReducer/CartSlice';
import { ProductSlice } from './sliceReducer/ProductSlice';

const store = configureStore({
  reducer: {
    ProductSlice: ProductSlice.reducer,
    CartSlice: CartSlice.reducer
  }
});

// store.ts
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
