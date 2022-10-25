import React, { useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';



import styles from '../styles/ListPage.module.css';

import List from './list';
import OrderList from './orderList';
import Pagination from './pagination';
import Footbar from './footbar';
import sesion from '../util/sesion';
import { productsAll, getList, restoredProductToCar, sortby, page,car } from '../Slice';

const ListPage = () => {
  const products = useSelector(productsAll);
  const sortbyFromStore = useSelector(sortby);
  const pagefromStore = useSelector(page);
  const carProducts = useSelector(car);
  const dispatch = useDispatch();
  useEffect(() => {
    const carFromSesion = sesion.getCarProductToSesion();
    //fill the list
    dispatch(getList({order:sortbyFromStore,page:pagefromStore}))
    //restored from sesion
    dispatch(restoredProductToCar(carFromSesion))
  }, [dispatch])
  return  <div className={styles.ListPageContainer}>
            <div className={styles.ListPageBody}>
                <OrderList></OrderList>
                <List products={products} carProducts={carProducts}></List>
                <Pagination></Pagination>
                <Footbar></Footbar>
            </div>
          </div>
}

export default ListPage
