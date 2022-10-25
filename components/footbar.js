import 'bootstrap/dist/css/bootstrap.min.css';

import styles from '../styles/Footbar.module.css';
import { useSelector,useDispatch } from 'react-redux';
import Link  from 'next/link';
import Button from 'react-bootstrap/Button';

import { car } from '../Slice';


const FootbarComponent = () => {
    const carAdds = useSelector(car);
    const dispatch = useDispatch();
    if(carAdds.length===0)return;
    // console.log(carAdds);
    const totalCount = 0;
    carAdds.forEach(element => {
        totalCount += element.cantidad;
    });
    return (
        <div className={styles.footbarContainer}>
            <div className={styles.footbarBody}>
                {totalCount} productos agregados
                <Link href="/car"><Button>Pagar</Button></Link>
            </div>
        </div>
    )
  }

  export default FootbarComponent;