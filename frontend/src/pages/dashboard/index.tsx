import { canSSRAuth } from "../../utils/canSSRAuth";
import Head from "next/head";
import { Header } from "../../components/ui/Header";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Painel Pizzaria</title>
      </Head>
      <section>
        <div>
          <Header />
          <h1>Painel dashboard</h1>
        </div>
      </section>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
