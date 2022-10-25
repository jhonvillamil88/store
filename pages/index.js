import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Link  from 'next/link';

import styles from '../styles/Home.module.css';



export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.containerBody}>
        <div>Aplicación hecha para una prueba Técnica</div>
        <Link href="/list"><Button>Click para ingresar</Button></Link>
      </div>
    </div>
  )
}
