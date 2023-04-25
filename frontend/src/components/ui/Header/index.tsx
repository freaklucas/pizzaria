import styles from "./styles.module.scss";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext } from "react";

export function Header() {
  const {user, signOut} = useContext(AuthContext);
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
          <a className={styles.logo}>🍕 Pizzaria</a>
        </Link>
        <h4>Olá {user?.name}</h4>
        <nav className={styles.manuNav}>
          <Link href="/category">
            <a>Categoria</a>
          </Link>
          <Link href="/product">
            <a>Cardapio</a>
          </Link>
          <button onClick={signOut}>
            <FiLogOut color="#fff" size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}
