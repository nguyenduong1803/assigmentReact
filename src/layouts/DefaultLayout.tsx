import { FC, ReactNode } from 'react';
import Footer from 'layouts/components/Footer';
import Header from 'layouts/components/Header';
interface Props {
  children: ReactNode;
}

const DefaultLayout: FC<Props> = (props: Props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
export default DefaultLayout;
