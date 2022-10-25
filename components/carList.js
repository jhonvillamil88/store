import 'bootstrap/dist/css/bootstrap.min.css';

import Table from 'react-bootstrap/Table';

import styles from '../styles/CarList.module.css';
import {moneyFormat} from '../util/functions';

export default function carList({carProducts}) {

    let total = 0;
    let items = [];
    carProducts.forEach(element => {
        total += element.cantidad * element.precio
        items.push(
            <tr key={element.id_empresa}>
                <td className={styles.productColumn}>
                  <img src={element.banner}></img>
                  <div>{element.nombre}</div>
                </td>
                <td>{element.cantidad}</td>
                <td>{moneyFormat(element.precio)}</td>
                <td>{moneyFormat(element.cantidad * element.precio)}</td>
            </tr>
        )
    });
    return (
        <div className={styles.carListContainer}>
          <Table striped bordered hover className={styles.carListTable}>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Totales</th>
              </tr>
            </thead>
            <tbody>
                {items}
                <tr>
                    <td></td>
                    <td></td>
                    <td>Total a pagar</td>
                    <td>{moneyFormat(total)}</td>
                </tr>
            </tbody>
          </Table>
        </div>
        
    )
  }