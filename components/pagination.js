import Pagination from "react-bootstrap/Pagination";
import { useSelector,useDispatch } from 'react-redux';

import { pageChange,page, sortby } from '../Slice';
import styles from '../styles/Pagination.module.css';

const paginationBasic = ()=>{
  const pageCurrent = useSelector(page);
  const sortByCurrent = useSelector(sortby);
  const dispatch = useDispatch();

  let active = pageCurrent;
  let items = [];
  // console.log(sortByCurrent);
  //from now it has 5 pages because only we have 200 rows, it's hard coded
  for (let number = 1; number < 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={()=>dispatch(pageChange({page:number,sortby:sortByCurrent}))}>
        {number}
      </Pagination.Item>,
    );
  }
  return (
      <div className={styles.paginationContainer}>
          <Pagination size="lg" >{items}</Pagination>
      </div>
  )
};


export default paginationBasic;
