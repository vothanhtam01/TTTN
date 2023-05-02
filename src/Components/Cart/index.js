import React from 'react';
import { BreadCrum } from '../mixin/mixin'
import CartHeader from './cartHeader'
import CartItem from './CartItem'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { formatter, TotalMoney } from '../mixin/mixin'
import { getOrder } from '../../action/action'


const Cart = () => {

  const SaveUser = JSON.parse(sessionStorage.getItem('userData'))
  const cart = useSelector(state => state.cart)
  const { t } = useTranslation();
  const dispatch = useDispatch()


  const handleOrder = () => { // ham thanh toan
    dispatch(getOrder(true))
    sessionStorage.setItem('order', true)
  }

  if (SaveUser) {
    if (cart.length === 0) {
      return (
        <React.Fragment>
          <section className="main__user" style={{ display: 'flex' }}>
            <div className="login__text" style={{ margin: 'auto' }}>
              <h2 style={{ textAlign: 'center' }}>{t('cart.empty.1')}</h2>
              <div className="item__button" >
                <Link to="/" className="-right">{t('MUA HÀNG')}</Link>
              </div>
            </div>
          </section>
        </React.Fragment>
      )
    }
    else {
      return (
        <React.Fragment>
          <BreadCrum path="Giỏ hàng" />
          <section className="cart__main">
            <div className="container">
              <div className="row">
                <div className="cart__table">
                  <table>
                    <CartHeader />
                    <CartItem items={cart} />
                  </table>
                  <div className="sum__table">
                    <table>
                      <thead>
                        <tr>
                          <th>{t('cart.buy.1')}</th>
                          <td>{formatter.format(TotalMoney(cart))}</td>
                        </tr>
                        <tr>
                          <th>{t('cart.buy.2')}</th>
                          <td>{formatter.format(TotalMoney(cart) / 10)}</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>{t('cart.buy.3')}</th>
                          <td className="-red">{formatter.format(TotalMoney(cart) + TotalMoney(cart) / 10)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="cart__button">
                    <div className="item__button">
                      <Link className="-right" to="/">{t('cart.buy.4')}</Link>
                      <Link className="-left" to="/order" onClick={handleOrder}>{t('cart.buy.5')}</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )
    }
  }
  else {
    return (
      <React.Fragment>
        <section className="main__user" style={{ display: 'flex' }}>
          <div className="login__text" style={{ margin: 'auto' }}>
            <h2 style={{ textAlign: 'center' }}>{t('cart.warning.1')}</h2>
            <div className="item__button" >
              <Link to="/login" className="-right">{t('button.login')}</Link>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }

}

export default Cart