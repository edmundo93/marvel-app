import Navbar from '@/presentation/components/nav-bar/nav-bar';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
    </main>
  );
}
