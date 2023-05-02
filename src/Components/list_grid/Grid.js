import React from 'react';
import { ProductItem } from '../mixin/mixin'

const Grid = (props) => {

  const { items, add } = props

  return (
    <React.Fragment>
      <ProductItem items={items} add={add} />
    </React.Fragment>
  )
}

export default Grid