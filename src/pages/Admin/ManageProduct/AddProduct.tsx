import { Typography } from '@mui/material';
import BasicBreadcrumbs from 'components/Atom/Breadcrumbs/Breadcrumbs';
import Paper from 'components/Atom/Paper/Paper';
import FormAddProduct from './Organism/FormProduct/FormAddProduct';
type Props = {};

const AddProduct = (props: Props) => {
  return (
    <>
      <BasicBreadcrumbs />
      <Paper elevation={1}>
        <Typography variant='h5' sx={{ py: 3 }}>
          Add Product
        </Typography>
        <FormAddProduct />
      </Paper>
    </>
  );
};
export default AddProduct;
