import { canSSRAuth } from "../../utils/canSSRAuth";
export default function Dashboard() {
  return (
    <section>
      <h1>Dashboard - Bem vindo usuário!</h1>
    </section>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
