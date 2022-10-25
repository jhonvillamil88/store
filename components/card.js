import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  useDispatch } from 'react-redux';

import { addProductToCar, car } from '../Slice';
import {moneyFormat,startFormat} from '../util/functions';

const CardCompnent = ({carProducts,product}) => {

  const dispatch = useDispatch()
  const handleClick = () => {
    let objectAdded = carProducts.filter(p=>p.id_empresa === product.id_empresa)[0];
    if(objectAdded){
      let newCount = objectAdded.cantidad + 1;
      product = {...product,cantidad:newCount};
    }else{
      product = Object.assign({cantidad: 1}, product);
    }
    dispatch(addProductToCar(product))
  }
  
  return (
    
    <Card style={{ width: '300px', margin:'15px' }}>
        <Card.Img variant="top" src={product.banner} />
        <Card.Body>
            <Card.Title>{product.nombre}</Card.Title>
            <Card.Text>
              {product.tipo_servicio}
            </Card.Text>
            <Card.Text>
              {startFormat(product.calificacion)}
            </Card.Text>
            <Card.Text>
              {moneyFormat(product.precio)}
            </Card.Text>
        </Card.Body>
        <Card.Footer><center><Button variant="primary" onClick={()=>{handleClick()}}>Agregar</Button></center></Card.Footer>
    </Card>
  )
}

export default CardCompnent;