import { createContext, useState, ReactElement } from 'react';
import { TypeAuth, UserLogin } from 'Types/Interface/User';
type TypeProps = {
  children: ReactElement;
};
export const AuthContext = createContext<TypeAuth | undefined>(undefined);
const initAuth: UserLogin = {
  _id: '',
  email: '',
  fullname: '',
  isAdmin: false,
  phone: '',
  updatedAt: ''
};
const Auth = (props: TypeProps) => {
  const [user, setUser] = useState<UserLogin | undefined>(initAuth);

  return <AuthContext.Provider value={{ user, setUser }}>{props.children}</AuthContext.Provider>;
};
export default Auth;
