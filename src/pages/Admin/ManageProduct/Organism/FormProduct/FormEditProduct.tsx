import { useForm } from 'react-hook-form';
import { TFormProduct, yupProduct, yupResolver } from 'utils/yup/yupProduct';
import { useEffect, useState } from 'react';
import BaseFormProduct from '../../Molecule/BaseFormProduct/BaseFormProduct';
import { useParams } from 'react-router-dom';
import useProductSlice from 'hooks/useProductSlice';
import { getBase64 } from 'utils/Base64';

const fakeOptions = ['Còn hàng', 'Hết hàng'];
const fakeCategoey = ['Điện thoại', 'laptop'];
const FormEditProduct = (props: any) => {
  const { handleUpdate, getProductById } = useProductSlice();
  const { id } = useParams();
  const [data, setData] = useState<TFormProduct>();

  const form = useForm<TFormProduct>({
    mode: 'onChange',
    resolver: yupResolver(yupProduct),
    defaultValues: yupProduct.getDefault()
  });
  const onSubmit = async (data: TFormProduct) => {
    const base64 = await getBase64(data?.file[0]);
    const newData = { ...data, file: base64 };
    console.log("update")
    const res = await handleUpdate(id || '', newData as TFormProduct);
    console.log(res);
  };
  const options = {
    fakeOptions,
    fakeCategoey,
    form,
    onSubmit
  };
  useEffect(() => {
    console.log(id);
    if (!id) return;
    const data = getProductById(id);
    setData(data);
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
