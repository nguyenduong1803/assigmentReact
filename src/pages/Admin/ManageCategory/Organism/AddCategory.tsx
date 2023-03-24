import { useForm } from 'react-hook-form';

import BaseFormCategory from '../Molecule/BaseFormCategory';
import { yupCategory, TFormCategory, yupResolver } from 'utils/yup/yupCategory';

const FormAddCategory = () => {
  const form = useForm<TFormCategory>({
    mode: 'onChange',
    resolver: yupResolver(yupCategory),
    defaultValues: yupCategory.getDefault()
  });
  const onSubmit = async (data: any) => {
    const { categoryName } = data;
    console.log(categoryName);
  };
  const options = {
    form,
    onSubmit
  };
  return <BaseFormCategory {...options} />;
};
export default FormAddCategory;
