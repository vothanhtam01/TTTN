import React, { useState, useEffect } from 'react';
import { formatter, TotalMoney, formatDate } from '../../mixin/mixin';
import { DropdownList } from 'react-widgets';
import { updateCart } from '../../../database/db';
import { useTranslation } from 'react-i18next';

const ListCarts = (props) => {

  const { items, setCheck, setOrder } = props
  const status = ["pending", "delivered", "cancelled"];
  const { t } = useTranslation();
  const [a, setA] = useState([])

  useEffect(() => {
    let data = []
    for (let item of items) {
      data.push(item.status)
    }
    setA(data)
  }, [props])

  let ValueInput = ({ item }) => (
    <span>
      <strong className={"-" + item}></strong>{item}
    </span>
  );

  const viewCart = (item) => {
    setCheck(2)
    setOrder(item)
  }


  return (
    <React.Fragment>
      {items.map((item, index) => {
        let date = new Date();
        date.setTime(item.timeOrder)
        return (
          <tr key={index} >
            <td onClick={() => {
              viewCart(item.id)
            }}>{item.id}</td>
            <td onClick={() => {
              viewCart(item.id)
            }}>{item.username}</td>
            <td onClick={() => {
              viewCart(item.id)
            }}>{formatDate(date)}</td>
            <td onClick={() => {
              viewCart(item.id)
            }}>{formatter.format(TotalMoney(item.cart) + TotalMoney(item.cart) / 10)}</td>
            <td>
              <DropdownList data={status} value={a[index]} style={{ height: '50px' }} valueComponent={ValueInput} onChange={async (value) => {
                item.status = value;
                let data = []
                for (let item of items) {
                  data.push(item.status)
                }
                setA(data)
                await updateCart(item)
                alert(t('dashboard.carts.6'))
              }} />
            </td>
          </tr>
        )
      })}
    </React.Fragment>
  )
}

export default ListCarts;