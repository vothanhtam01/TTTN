import React  from 'react';
import { ProductLast } from '../mixin/mixin'

const List = (props) => {

  const { items , add } = props

  return (
    <React.Fragment>
      <ProductLast add={add} items={items} />
    </React.Fragment>
  )
}

export default List