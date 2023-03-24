import { TFormProduct } from 'utils/yup/yupProduct';
import { createSlice, createAsyncThunk, PayloadAction, AsyncThunk } from '@reduxjs/toolkit';
import { addProduct } from 'services/productService/ProductService';
import HttpClient from 'utils/HtppClient';
import { CommonResponse } from 'Types/Interface/Common';
import { endpointProduct } from 'constants/endpoints';
import { useNavigate } from 'react-router-dom';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;
interface ProductState {
  products: TFormProduct[];
  loading: boolean;
}

const initialState: ProductState = {
  products: [],
  loading: false
};
const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(actionGetProducts.fulfilled, (state, { payload }) => {
        state.products = payload || [];
        state.loading = false;
      })
      .addCase(actionRemoveProducts.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.products = state.products && state.products.filter((item) => item._id !== payload);
        state.loading = false;
      })
      .addMatcher<PendingAction>(
        (action) => action.type.endsWith('/pending'),
        (state, action) => {
          state.loading = true;
        }
      )
      .addMatcher<RejectedAction | FulfilledAction>(
        (action) => action.type.endsWith('/rejected') || action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.loading = false;
        }
      );
  }
});

export const actionAddProduct = createAsyncThunk('product/addProduct', async (payload, action) => {
  const res = await addProduct({});
  return payload;
});

export const actionGetProducts = createAsyncThunk('product/getProduct', async (payload, action) => {
  try {
    const res = await HttpClient.get<TFormProduct[], CommonResponse<TFormProduct[]>>(endpointProduct.GET_ALL);
    return res.data;
  } catch (error) {
    return null;
  }
});

export const actionRemoveProducts = createAsyncThunk('product/removeProduct', async (payload: string, action) => {
  try {
    const res = await HttpClient.delete(endpointProduct.REMOVE + payload);
    console.log(res);
    return payload;
  } catch (error) {
    return payload;
  }
});

export const actionUpdateProducts = createAsyncThunk(
  'product/UpdateProduct',
  async (payload: { id: string; body: TFormProduct }, action) => {
    const { id, body } = payload;
    try {
      const res = await HttpClient.put(endpointProduct.UPDATE + id, body);
      return payload;
    } catch (error) {
      return payload;
    }
  }
);
export { ProductSlice };
