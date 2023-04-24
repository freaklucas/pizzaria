import Head from "next/head";
import pizza from "../../../public/pizzaria.svg";
import styles from "../../../styles/home.module.scss";
import Image from "next/image";
import { Input } from "../../components/ui/Input/index";
import { Button } from "../../components/ui/Button/index";
import Link from "next/link";
import { FormEvent, useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function SignUp() {
  const { signUp } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    if(name === "" || email=== "" || password === "") {
      alert("Preencha todos os dados!");
      return;
    }
    setLoading(true);
    let data = {name, email, password};
    await signUp(data);

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Faça seu cadastro!</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={pizza} alt="logo pizza" width={520} height={300} />
        <div className={styles.login}>
          <h1>Crie sua conta</h1>
          <form onSubmit={handleSignUp}>
          <Input 
              value={name}
              onChange={(e) => setName(e.target.value) }
              placeholder="Insira seu nome" 
              type="text" 
            />
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
            <Button
              type="submit"
              loading={loading}
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
