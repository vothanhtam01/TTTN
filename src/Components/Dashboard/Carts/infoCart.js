import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getCart } from '../../../database/db'
import { formatter } from '../../mixin/mixin'

const InfoCart = (props) => {

  const { order, setCheck } = props
  const { t } = useTranslation();
  const [Bool, setBool] = useState(false)
  const [items, setItem] = useState(Object)

  useEffect(() => {
    const get = async () => {
      const data = await getCart(order)
      setItem(data)
      setBool(true)
    }
    get()
  }, [])

  if (Bool) {
    return (
      <React.Fragment>
        <h1>{t(`Hóa đơn số ${order}`)}</h1>
        <section className="cart__main">
          <div className="container">
            <div className="row">
              <div className="cart__table ">
                <table>
                  <thead>
                    <tr>
                      <th className="count">{t('cart.table.number')}</th>
                      <th className="pro">{t('cart.table.pro')}</th>
                      <th className="info">{t('cart.table.info')}</th>
                      <th className="privce">{t('cart.table.price')}</th>
                      <th className="num">{t('cart.table.count')}</th>
                      <th className="sum">{t('cart.table.priceTotal')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.cart.map((item, index) => (
                      <tr key={index}>
                        <td >{index + 1}</td>
                        <td>
                          <img className="img" src={item.image} />
                        </td>
                        <td>{item.name}</td>
                        <td>{formatter.format(item.price)}</td>
                        <td>
                          <p> {item.quantity}
                          </p>
                        </td>
                        <td>{formatter.format(item.price * item.quantity)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="cart__button" style={{ marginTop: '1rem' }}>
                <div className="item__button" style={{ cursor: 'pointer' }}>
                  <a className="-right" onClick={() => setCheck(1)}>{t('button.back')} </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
  else {
    return (
      <React.Fragment>

      </React.Fragment>
    )
  }
}

export default InfoCart