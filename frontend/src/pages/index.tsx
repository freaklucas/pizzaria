import Head from "next/head";
import pizza from "../../public/pizzaria.svg";
import styles from "../../styles/home.module.scss";
import Image from "next/image";
import { Input } from "../components/ui/Input/index";
import { Button } from "../components/ui/Button/index";
import Link from "next/link";

import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { GetServerSideProps } from "next";
import { canSSRGuest } from "../utils/canSSRGuest";

export default function Home() {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    if (email === "" || password === "") {
      toast.warning("Preencha os campos corretamente!");
      return;
    }

    setLoading(true);

    let data = {
      email,
      password,
    };
    await signIn(data);

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Pizzaria - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={pizza} alt="logo pizza" width={520} height={300} />
        <div className={styles.login}>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Insira seu Email"
              type="text"
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Insira sua Senha"
              type="password"
            />
            <Button type="submit" loading={loading} value="signIn">
              Acessar
            </Button>
          </form>
          <a className={styles.text}>
            <Link href="/signup">Não possui uma conta? Cadastre-se</Link>
          </a>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
