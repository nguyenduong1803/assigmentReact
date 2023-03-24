import * as yup from 'yup';
export { yupResolver } from '@hookform/resolvers/yup';
// yup.setLocale({
//   mixed: {
//     notType: '${path} is required'
//   }
// });
const yupCategory = yup.object().shape({
  categoryName: yup
    .string()
    .trim('Please remove the spaces')
    .strict(true)
    .required('Please enter username')
    .min(3)
    .default('')
});
export { yupCategory };
type TFormCategory = yup.InferType<typeof yupCategory>;
export type { TFormCategory };
