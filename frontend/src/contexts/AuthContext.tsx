import { createContext, ReactNode, useState } from "react";
import { destroyCookie, setCookie } from "nookies";
import Router from "next/router";
import { api } from "../services/apiClient";
import { toast } from "react-toastify";

type NewType = (credentials: SignInProps) => Promise<void>;

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credencials: SignInProps) => Promise<void>;
  signOut: () => void;
  signUp: (credencials: SignUpProps) => Promise<void>;
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

type SignUpProps = {
  name: string;
  email: string;
  password: string;
}

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);
export function signOut() {
  try {
    destroyCookie(undefined, "@nextauth.token");
    Router.push("/");
  } catch (error) {
    console.log(error);
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>();
  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post("/session", {
        email,
        password,
      });
      const { id, name, token } = response.data;
      setCookie(undefined, "@nextauth.token", token, {
        maxAge: 60 * 50 * 24,
        path: "/",
      });
      setUser({
        id,
        name,
        email,
      });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      toast.success("Logado com sucesso!");
      Router.push("/dashboard");
    } catch (error) {
      toast.error("Erro ao acessar!");
      console.log("Erro ao acessar ", error);
    }
  }

  async function signUp({name, email, password}: SignUpProps) {
    try {
      const response = await api.post("/users", {
        name,
        email,
        password
      });

      toast.success("Cadastrado com sucesso!");


       Router.push("/");
    }
    catch(error) {
      toast.error("Erro ao cadastrar!");
      console.log("Erro ao cadastrar ", error);

    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
