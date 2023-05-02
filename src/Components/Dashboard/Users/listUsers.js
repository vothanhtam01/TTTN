import React from 'react'
import { useDispatch } from 'react-redux'
import { getUserData } from '../../../action/action.js'
import { deleteUser } from '../../../database/db'
import { useTranslation } from 'react-i18next';


const GetListUser = (props) => {

  const { items } = props
  const dispatch = useDispatch()
  const { t } = useTranslation();


  const handleDelete = async (user) => {
    if (window.confirm(t('dashboard.warning.1'))) {
      await deleteUser(user)
      alert(t('dashboard.warning.2'))
      window.location.reload();
    }
  }

  return (
    <React.Fragment>
      {items.map((item, index) => (
        <tr key={index} onClick={e => {
          document.getElementById("dis__button").removeAttribute("disabled");
          dispatch(getUserData(item))
        }}>
          <th>{item.id}</th>
          <th>{item.name}</th>
          <th>{item.phone}</th>
          <th>{item.addrres}</th>
          <th style={{ color: 'red' }}><i className="fas fa-times" onClick={() => handleDelete(item)}></i></th>
        </tr>
      ))}
    </React.Fragment>
  )
}


export default GetListUser