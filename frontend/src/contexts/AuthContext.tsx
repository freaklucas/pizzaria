import { createContext, ReactNode, useState } from "react";

type NewType = (credentials: SignInProps) => Promise<void>;

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: NewType;
};

type UserProps = {
  id: string;
  name: string;
  email: string;
};

type SignInProps = {
  email: string;
  password: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>();
  const isAuthenticated = !!user;

  async function signIn({email, password}: SignInProps) {
    console.log(email);
    console.log(password)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}