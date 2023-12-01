import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/todos" legacyBehavior>
          <a>ToDos</a>
        </Link>
      </li>
      <li>
        <Link href="/products" legacyBehavior>
          <a>Produtos</a>
        </Link>
      </li>
      <li>
        <Link href="/about" legacyBehavior>
          <a>Sobre nós</a>
        </Link>
      </li>
      <li>
        <Link href="/contact" legacyBehavior>
          <a>Contato</a>
        </Link>
      </li>
    </ul>
  );
}
