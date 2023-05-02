import React from 'react';
import { formatter, TotalMoney } from '../mixin/mixin';

const Row = (props) => {

  const { element, date, setCheck, setOrder } = props

  return (
    <tr onClick={() => {
      setCheck(4)
      setOrder(element.id)
      
    }
    }>
      <td>{element.id}</td>
      <td>{date}</td>
      <td>{formatter.format(TotalMoney(element.cart) + TotalMoney(element.cart) / 10)}</td>
      <td className={"-" + element.status}>{element.status}</td>
    </tr>
  )
}

export default Row;