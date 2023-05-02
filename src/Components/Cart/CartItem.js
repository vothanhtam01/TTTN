import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { formatter } from '../mixin/mixin'
import { DeleteCart, UpdateQuantity } from '../../action/action'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../database/db'


const CartItem = (props) => {

  const { t } = useTranslation();
  const { items } = props;
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const cart = useSelector(state => state.cart)
  const [amount, setAmount] = useState(Object)

  const deleteItem = async (e, item) => {
    e.preventDefault()
    user.cart = cart.filter((dele) => dele.id !== item.id)
    dispatch(DeleteCart(item.id))
    await updateUser(user)
    alert(t('cart.warning.2'))
  }

  const handleChange = async (e, id) => {
    const target = e.target;
    const { name, value } = target;
    setAmount({ ...amount, [name]: value });
    user.cart = cart.map((item) => item.id === id ? { ...item, quantity: value } : item)
    dispatch(UpdateQuantity(id, value))
    await updateUser(user)
  }


  return (
    <React.Fragment>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td >{index + 1}</td>
            <td>
              <img className="img" src={process.env.PUBLIC_URL + item.image} />
            </td>
            <td>{item.name}</td>
            <td>{formatter.format(item.price)}</td>
            <td>
              <input value={amount.item} defaultValue={item.quantity} type="number" min='1' name={item}
                onChange={e => handleChange(e, item.id)}
              />
            </td>
            <td>{formatter.format(item.price * item.quantity)}</td>
            <td>
              <a href="#" onClick={e => deleteItem(e, item)}>
                <i className="fas fa-times" />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </React.Fragment>
  )
}


export default CartItem