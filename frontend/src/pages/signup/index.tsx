import Head from "next/head";
import pizza from "../../../public/pizza.png";
import styles from "../../../styles/home.module.scss";
import Image from "next/image";
import { Input } from "../../components/ui/Input/index";
import { Button } from "../../components/ui/Button/index";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Faça seu cadastro!</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={pizza} alt="logo pizza" width={520} height={300} />
        <div className={styles.login}>
          <h1>Crie sua conta</h1>
          <form>
          <Input 
              placeholder="Insira seu nome" 
              type="text" 
            />
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
              loading={true}
            > 
              Criar conta
            </Button> 
          </form>
          <a className={styles.text}>
            <Link href="/">
              Já possui uma conta? Faça login
            </Link>
          </a>
        </div>
      </div>
    </>
  );
}
