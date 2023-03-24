import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useForm } from 'react-hook-form';

import ToastMess from '../../../../components/Atom/ToastMess/ToastMess';
import { auth } from '../../../../services/firebase/firebase';
import BaseFormLogin from '../Molecule/BaseFormLogin';

type FormData = {
  emai: string;
  password: string;
};
const provider = new GoogleAuthProvider();
const FormLogin = () => {
  const [openToast, setOpenToast] = React.useState<boolean>(false);

  // hanlde login account registed
  const form = useForm<FormData>({
    mode: 'onChange'
  });
  const onSubmit = async (data: any) => {};

  //   handle login google
  const handleLoginGoogle = async () => {
    const res = await signInWithPopup(auth, provider);
  };
  const options = {
    form,
    onSubmit,
    handleLoginGoogle
  };
  return (
    <>
      <BaseFormLogin {...options} />
      <ToastMess
        setState={setOpenToast}
        state={openToast}
        message='Thông tin tài khoản hoặc mật khẩu không đúng'
        variant='standard'
        severity='error'
      />
    </>
  );
};
export default FormLogin;
