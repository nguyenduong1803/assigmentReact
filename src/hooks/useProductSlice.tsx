import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { actionGetProducts, actionRemoveProducts, actionUpdateProducts } from 'redux/sliceReducer/ProductSlice';
import { RootState, useAppDispatch } from 'redux/store';
import { TFormProduct } from 'utils/yup/yupProduct';
export default function useProductSlice() {
  const state = useSelector((state: RootState) => state.ProductSlice);
  const dispatch = useAppDispatch();
  const initialProduct = {
    _id: '',
    products: '',
    categories: '',
    describe: '',
    discount: 0,
    file: '',
    name: '',
    price: '',
    quantity: 0,
    status: ''
  };
  const getAllProduct = () => {
    if (state.products && state.products.length === 0) {
      return dispatch(actionGetProducts());
    }
  };
  const handleDetele = (id: string) => {
    dispatch(actionRemoveProducts(id));
  };

  const handleUpdate = async (id: string, body: TFormProduct) => {
    const res = await dispatch(actionUpdateProducts({ id, body }));
    console.log(res);
  };
  const getProductById = (id: string) => {
    return state.products.find((product) => product._id === id);
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return { ...state, handleDetele, handleUpdate, getProductById };
}
