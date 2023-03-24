import { useForm } from 'react-hook-form';
import { TFormProduct, yupProduct, yupResolver } from 'utils/yup/yupProduct';
import { useEffect, useState } from 'react';
import BaseFormProduct from '../../Molecule/BaseFormProduct/BaseFormProduct';
import { getProductById, updateProduct } from 'services/productService/ProductService';
import { useParams } from 'react-router-dom';

const fakeOptions = ['Còn hàng', 'Hết hàng'];
const fakeCategoey = ['Điện thoại', 'laptop'];
const FormEditProduct = (props: any) => {
  const [data, setData] = useState<TFormProduct>();
  const { id } = useParams();

  const form = useForm<TFormProduct>({
    mode: 'onChange',
    resolver: yupResolver(yupProduct),
    defaultValues: yupProduct.getDefault()
  });
  const onSubmit = async (data: TFormProduct) => {

    const res = await updateProduct(id,data);
    console.log(res);
  };
  const options = {
    fakeOptions,
    fakeCategoey,
    form,
    onSubmit
  };
  useEffect(() => {
    if (!id) return;
    const fethData = async () => {
      const res = await getProductById(id);
      setData(res.data);
    };
    fethData();
  }, [id]);
  // reset data
  useEffect(() => {
    console.log(data);
    if (!data) return;
    form.reset(data);
  }, [data, form, form.reset, id]);

  return <BaseFormProduct {...options} />;
};
export default FormEditProduct;
