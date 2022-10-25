import Form from 'react-bootstrap/Form';
import { useSelector,useDispatch } from 'react-redux';
import { sortChange,sortby,page } from '../Slice';
import styles from '../styles/OrderList.module.css';


export default function OrderList() {
  const sortbyKey = useSelector(sortby);
  const pageCurrent = useSelector(page);
  const dispatch = useDispatch();
  return (
    <div className={styles.orderListContainer}>
        <Form className={styles.orderList}>
          <fieldset >
              <legend>Orden</legend>
              <Form.Select value={sortbyKey} onChange={(evt)=>{dispatch(sortChange({order:evt.target.value,page:pageCurrent}))}}>
                  <option value="nombre">Nombre A-Z</option>
                  <option value="-nombre">Nombre Z-A</option>
                  <option value="precio">Menor precio</option>
                  <option value="-precio">Mayor precio</option>
                  <option value="calificacion">Menor calificación</option>
                  <option value="-calificacion">Mayor calificación</option>
              </Form.Select>
          </fieldset>
      </Form>
    </div>
    
  )
}
