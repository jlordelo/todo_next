import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Next.js</title>
        <meta name="keywords" content="Roupas, calçados, acessórios" />
        <meta
          name="description"
          content="Site de vendas de roupas, calçados e acessórios"
        />
      </Head>
      <div>
        <h1 className={styles.title}>Home Next.js</h1>
        <Image
          src="/images/nycitynight.jpg"
          width="600"
          height="400"
          alt="NY City a noite"
        />
      </div>
    </>
  );
}
