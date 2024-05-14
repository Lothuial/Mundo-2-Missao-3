import Head from 'next/head';
import {Menu} from '../componentes/Menu';
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
  return (
    <>
      <div>
        <Head>
        <title>Loja Next</title>
          <meta name="description" content="Projeto Mundo 2 - Missão 3" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Menu />
        <main className='d-flex justify-content-center'>
          <h1 className='mt-5'>Página Inicial</h1>
        </main>
      </div>
    </>
  )
}

export default Home