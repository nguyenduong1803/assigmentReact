import * as yup from 'yup';
import Regexs from '../Regexs';
export { yupResolver } from '@hookform/resolvers/yup';

const yupProduct = yup.object().shape({
  _id: yup.string(),
  name: yup
    .string()
    .trim('Please remove the spaces')
    .strict(true)
    .required('Please enter product name')
    .min(3)
    .default(''),
  status: yup
    .string()
    .trim('Please remove the spaces')
    .strict(true)
    .required('Please enter status product')
    .default(''),
  categories: yup.string().trim('Please remove the spaces').strict(true).required('Please enter category').default(''),
  price: yup
    .string()
    .required('required')
    .trim('Please remove the spaces')
    .matches(Regexs.number, 'only Number')
    .default(''),
  quantity: yup
    .string()
    .required('required')
    .trim('Please remove the spaces')
    .matches(Regexs.number, 'only Number')
    .default(''),
  discount: yup
    .string()
    .required('required')
    .trim('Please remove the spaces')
    .matches(Regexs.number, 'only Number')
    .default(''),
  describe: yup.string(),
  file: yup.mixed().test('required', 'Please choose  file', (value) => {
    return value[0];
  })
});
type TFormProduct = yup.InferType<typeof yupProduct>;
export type { TFormProduct };
export { yupProduct };
