import Head from "next/head";
import pizza from "../../public/pizza.png";
import styles from "../../styles/home.module.scss";
import Image from "next/image";
import { Input } from "../components/ui/Input/index";
import { Button } from "../components/ui/Button/index";
import Link from "next/link";

import { FormEvent, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Home() {
  const {signIn} = useContext(AuthContext);
  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    let data = {
      email: "emailteste@teste.com",
      password: "senhateste"
    };
    await signIn(data);
  }

  return (
    <>
      <Head>
        <title>Pizzaria - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={pizza} alt="logo pizza" width={520} height={300} />
        <div className={styles.login}>
          <form onSubmit={handleLogin}>
           <Input 
              placeholder="Insira seu Email" 
              type="text" 
            />
            <Input 
              placeholder="Insira sua Senha" 
              type="password" 
            />
            <Button
              type="submit"
              loading={false}
              value="signIn"
            > 
              Acessar
            </Button> 
          </form>
          <a className={styles.text}>
            <Link href="/signup">
              Não possui uma conta? Cadastre-se
            </Link>
          </a>
        </div>
      </div>
    </>
  );
}
