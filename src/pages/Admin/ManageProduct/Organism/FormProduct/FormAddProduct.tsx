import { useForm } from 'react-hook-form';
import { TFormProduct, yupProduct } from 'utils/yup/yupProduct';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import BaseFormProduct from '../../Molecule/BaseFormProduct/BaseFormProduct';
import { addProduct } from 'services/productService/ProductService';

const fakeOptions = ['Còn hàng', 'Hết hàng'];
const fakeCategoey = ['Điện thoại', 'laptop'];

const FormAddProduct = () => {
  const form = useForm<TFormProduct>({
    mode: 'onChange',
    resolver: yupResolver(yupProduct),
    defaultValues: yupProduct.getDefault()
  });
  const onSubmit = async (data: TFormProduct) => {
    // const base64 = await getBase64(data.file[0]);
    try {
      await addProduct(data);
    } catch (error) {}
  };
  const options = {
    fakeOptions,
    fakeCategoey,
    form,
    onSubmit
  };
  useEffect(() => {
    console.log('err', form.formState.errors);
  });
  return <BaseFormProduct {...options} />;
};
export default FormAddProduct;
