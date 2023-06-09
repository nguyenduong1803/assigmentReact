import { FormHelperText, Grid, IconButton, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
//
import ControlTextField from 'components/Atom/Form/ControlTextField';
import ControlSelect2 from 'components/Atom/Form/ControlSelect2';
import Buttons from 'components/Atom/Button/Button';
import { PhotoCamera } from '@mui/icons-material';

const BaseFormProduct = (props: any) => {
  const { fakeOptions, fakeCategoey, form, onSubmit } = props;
  const [urlImage, setUrlImage] = useState<string>('');

  const {
    control,
    handleSubmit,
    register,
    watch,
    formState: { errors }
  } = form;
  const [file, named] = watch(['file', 'name']);

  useEffect(() => {
    if (file && file[0]) {
      const readURL = (input: File) => {
        setUrlImage(URL.createObjectURL(input));
      };
      readURL(file[0]);
    }
  }, [file, named]);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ControlTextField id='outlined-basic' label='Product Name' name='name' control={control} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlTextField id='outlined-basic' label='Quantity' name='quantity' control={control} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlTextField id='outlined-basic' label='Discount' name='discount' control={control} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlTextField id='outlined-basic' label='Price' name='price' control={control} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlSelect2 options={fakeOptions} label='Status' name='status' control={control} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlSelect2 options={fakeCategoey} label='Category' name='categories' control={control} />
        </Grid>
        <Grid item xs={12} md={12}>
          <ControlTextField
            id='outlined-multiline-flexible'
            rows={4}
            multiline
            label='Description'
            name='describe'
            control={control}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction='row' spacing={2} alignItems='center'>
            <Typography variant='subtitle1'>Choose File</Typography>
            <IconButton color='primary' aria-label='upload picture' component='label'>
              <input hidden {...register('file')} type='file' />
              <PhotoCamera />
            </IconButton>
            {urlImage && <img width='150px' height='150px' src={urlImage} />}
          </Stack>
          <FormHelperText sx={{ color: '#d32f2f' }} variant='outlined'>
            {errors.file?.message && errors.file?.message}
          </FormHelperText>
        </Grid>
      </Grid>
      <Buttons sx={{ mt: 3 }} type='submit'>
        Submit
      </Buttons>
    </Form>
  );
};
const Form = styled('form')({
  maxWidth: '800px'
});
export default BaseFormProduct;
