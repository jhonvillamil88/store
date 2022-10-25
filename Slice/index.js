import { createSlice } from '@reduxjs/toolkit';
import sesionLocal from '../util/sesion';
import api from '../util/api';




const listPageSlice = createSlice({
  name: 'products',
  initialState:{
    sortby:"nombre",
    products: [],
    page:1,
    car:[]
  },
  reducers: {
    fetch(state, { payload }) {
      state.products = payload
    },
    changeSort(state, { payload }) {
      state.sortby = payload
    },
    changePage(state, { payload }) {
      state.page = payload
    },
    addCar(state, { payload }) {
      let index = state.car.findIndex(obj => obj.id_empresa === payload.id_empresa);
      if(index<0){
        state.car.push(payload);
      }else{
        state.car[index].cantidad = payload.cantidad;
      }
      sesionLocal.addCarProductToSesion(state.car)
    },
    carRestored(state, { payload }) {
      state.car = payload
      
    },
    carCleaner(state, { payload }) {
      state.car = []
    }
  },
})

//actions
export const { add, del, patch, delProp, fetch, changeSort, changePage, addCar, state, carRestored, carCleaner } = listPageSlice.actions



//list order
export const sortby = ({sortby}) => sortby
export const sortChange = (param) => dispatch => {
  dispatch(changeSort(param.order))
  dispatch(getList({order:param.order,page:param.page}))
}


//list pagination
export const page = ({page}) => page
export const pageChange = (param) => dispatch => {
  dispatch(changePage(param.page))
  dispatch(getList({page:param.page,order:param.sortby}))
}

//list
export const getList = ({order="nombre",page=1}) => dispatch => {
  return api.get({endpoint:`list?order=${order}&page=${page}`})
  .then(products=>{
    dispatch(fetch(products))
  })
}
export const productsAll = ({products}) => products


//car
export const car = ({car}) => car
export const addProductToCar = (product) => dispatch => {
  sesionLocal.addCarProductToSesion();
  dispatch(addCar(product))
}
export const restoredProductToCar = (products) => dispatch => {
  dispatch(carRestored(products))
}
export const cleanProductToCar = () => dispatch => {
  sesionLocal.CleanCarProductToSesion();
  dispatch(carCleaner());

}

export default listPageSlice.reducer