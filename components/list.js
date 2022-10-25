import Card from '../components/card';
import styles from '../styles/List.module.css';



export default function List({products=[],carProducts=[]}) {
  if(products.length===0){
    return(
      <div className={styles.productNoAvalaible}>No hay productos disponibles</div>
    )
  }
  // const carProducts = useSelector(car);
  return (
    <div className={styles.ListContainer}>
      {products.map( product => (
        <Card key={product.id_empresa} carProducts={carProducts} product={product}></Card>
      ))} 
    </div>
  )
}
