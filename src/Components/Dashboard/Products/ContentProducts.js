import React, { useEffect, useState } from 'react';
import { getData } from '../../../database/db'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next';
import ListProducts from './ListProducts';
import ProductForm from './ProductForm';


const ContentProducts = () => {

  const [List, setList] = useState(Object)
  const [Bool, setBool] = useState(false)
  const dispatch = useDispatch()
  const { t } = useTranslation();

  useEffect(() => {
    const getProducts = async () => {
      const ListP = await getData('products')
      setList([...ListP])
      setBool(true)
    }
    getProducts()
  }, [dispatch])

  return (
    <React.Fragment>
      <div className="table-scroll">
        <table className="content-dashboard-table">
          <thead>
            <tr>
              <th>{t('dashboard.products.1')}</th>
              <th>{t('dashboard.products.2')}</th>
              <th>{t('dashboard.products.3')}</th>
              <th>{t('dashboard.products.4')}</th>
              <th>{t('dashboard.table.5')}</th>
            </tr>
            {Bool ? <ListProducts items={List} /> : <React.Fragment></React.Fragment>}
          </thead>
        </table>
      </div>
      <ProductForm />
    </React.Fragment>
  )
}

export default ContentProducts;

