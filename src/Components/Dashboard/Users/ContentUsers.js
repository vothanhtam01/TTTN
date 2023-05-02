import React, { useEffect, useState } from 'react';
import { getData } from '../../../database/db'
import GetListUser from './listUsers'
import UserFrom from './UserForm'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next';


const ContentUsers = () => {

  const [List, setList] = useState(Object)
  const [Bool, setBool] = useState(false)
  const dispatch = useDispatch()
  const { t } = useTranslation();

  useEffect(() => {
    const getUsers = async () => {
      const ListU = await getData('user')
      setList(ListU.filter((item) => item.id !== 1))
      setBool(true)
    }
    getUsers()
  }, [dispatch])

  return (
    <React.Fragment>
      <div className="table-scroll">
        <table className="content-dashboard-table">
          <thead>
            <tr>
              <th>{t('dashboard.table.1')}</th>
              <th>{t('dashboard.table.2')}</th>
              <th>{t('dashboard.table.3')}</th>
              <th>{t('dashboard.table.4')}</th>
              <th>{t('dashboard.table.5')}</th>
            </tr>
            {Bool ? <GetListUser items={List} /> : <React.Fragment></React.Fragment>}
          </thead>
        </table>
      </div>
      <UserFrom />
    </React.Fragment>
  )
}

export default ContentUsers;

