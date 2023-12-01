import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contato</title>
      </Head>
      <div classBane={styles.container}>
        <h1>Contact</h1>
        <p>Entre em contato</p>
      </div>
    </>
  );
}
