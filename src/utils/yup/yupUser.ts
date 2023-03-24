import * as yup from 'yup';
import Regexs from '../Regexs';
export { yupResolver } from '@hookform/resolvers/yup';

const yupLogin = yup.object().shape({
  email: yup
    .string()
    .trim('Please remove the spaces')
    .strict(true)
    .required('Please enter email')
    .matches(Regexs.email, 'Vui lòng nhập đúng Email')
    .default(''),
  password: yup.string().trim('Please remove the spaces').strict(true).required('Please enter password').default('')
});
type TFormLogin = yup.InferType<typeof yupLogin>;
export { yupLogin };
export type { TFormLogin };
