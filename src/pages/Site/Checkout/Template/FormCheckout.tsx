import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import BaseFormCheckout from '../Molecule/BaseFormCheckout';
import { validationCheckout } from 'utils/Validate/FormCheckout';
import { selectCart } from 'redux/selector';
import { AppDispatch } from 'redux/store';
import ToastMess from 'components/Atom/ToastMess/ToastMess';
import { useState } from 'react';
import { FormOrder } from 'Types/Interface/Order';
type FormData = {
  address: string;
  phoneNumber: string;
  note: string;
  username: string;
};
const FormAddCategory = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [openToast, setOpenToast] = useState<boolean>(false);

  const carts = useSelector(selectCart);
  const form = useForm<FormData>({
    mode: 'onChange',
    resolver: yupResolver(validationCheckout),
    defaultValues: validationCheckout.getDefault()
  });
  const onSubmit = async (data: any) => {
    const datas: FormOrder = {
      ...data,
      userId: '63845f8ed75a0162ee28f90a',
      totalMoney: 120000,
      products: carts
    };
    // createOrder
    form.reset({ address: '', phoneNumber: '', username: '', note: '' });
    setOpenToast(true);
  };
  const options = {
    form,
    onSubmit
  };
  return (
    <>
      <BaseFormCheckout {...options} />
      <ToastMess
        setState={setOpenToast}
        state={openToast}
        message='Đã thêm đặt hàng thành công'
        variant='filled'
        severity='success'
      />
    </>
  );
};
export default FormAddCategory;
