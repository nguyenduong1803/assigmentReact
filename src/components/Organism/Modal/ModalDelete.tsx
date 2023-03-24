import { Button } from '@mui/material';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useQuery } from 'react-query';
import BasicModal from '../../Atom/Modal/ModalCofirm';

type Props = {
  id: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  removeProduct: (id: string) => void;
};

export default function ModalDelete({ id,open, setOpen,removeProduct }: Props) {
  const handleDelete = () => {
    console.log('Delete');
    removeProduct(id)
  };
  return (
    <BasicModal title='Do you want delete product?' setOpen={setOpen} open={open}>
      <Button onClick={() => setOpen(false)} color='error' variant='contained'>
        Cancel
      </Button>
      <Button variant='contained' color='success' onClick={handleDelete}>
        Delete
      </Button>
    </BasicModal>
  );
}
