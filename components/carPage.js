import React, { useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux';
import Router from 'next/router';

import sesion from '../util/sesion';
import CarList from './carList';
import CarForm from './carForm';
import { car , restoredProductToCar,cleanProductToCar } from '../Slice';
import styles from '../styles/CarPage.module.css';


const CarPage = () => {
    const dispatch = useDispatch();
    let carProducts = useSelector(car);

    useEffect(() => {
        if(carProducts.length===0){
            carProducts = sesion.getCarProductToSesion();
            dispatch(restoredProductToCar(carProducts))
        }
    }, [dispatch])


    
    // const carFromSesion = sesion.getCarProductToSesion();
    // dispatch(restoredProductToCar(carFromSesion))
    return <div className={styles.carPageContainer}>
        <div className={styles.carPageBody}>
            <CarList carProducts={carProducts}></CarList>
            <CarForm onClickShopCancel={()=>{
                dispatch(cleanProductToCar())
                Router.push('/list');
            }}></CarForm>
        </div>
        
    </div>
};

export default CarPage