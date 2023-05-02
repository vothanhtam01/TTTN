import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../../database/db'
import { useTranslation } from 'react-i18next';
import { formatter } from '../../mixin/mixin.js';
import { getProductData } from '../../../action/action';


const ListProducts = (props) => {

  const { items } = props
  const dispatch = useDispatch()
  const { t } = useTranslation();


  const handleDelete = async (product) => {
    if (window.confirm(t('dashboard.warning.1'))) {
      await deleteProduct(product)
      alert(t('dashboard.warning.2'))
      window.location.reload();
    }
  }

  return (
    <React.Fragment>
      {items.map((item, index) => (
        <tr key={index} onClick={e => {
          document.getElementById("dis__button").removeAttribute("disabled");
          document.getElementById("file-upload").removeAttribute("disabled");
          document.getElementById("upload-btn").removeAttribute("disabled");
          dispatch(getProductData(item))
        }}>
          <th>{item.id}</th>
          <th>{item.name}</th>
          <th>{formatter.format(item.price)}</th>
          <th>{item.category}</th>
          <th style={{ color: 'red' }}><i className="fas fa-times" onClick={() => handleDelete(item)}></i></th>
        </tr>
      ))}
    </React.Fragment>
  )
}


export default ListProducts