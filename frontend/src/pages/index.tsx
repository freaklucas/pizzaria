import Head from "next/head";
import pizza from "../../public/pizza.png";
import styles from "../../styles/home.module.scss";
import Image from "next/image";
import { Input } from "../components/ui/Input/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizzaria - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={pizza} alt="logo pizza" width={520} height={300} />
        <div className={styles.login}>
          <form>
            <Input placeholder="Insira seu Email" type="text" />
            <Input placeholder="Insira sua Senha" type="password" />
          </form>
        </div>
      </div>
    </>
  );
}
