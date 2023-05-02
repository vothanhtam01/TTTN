import React from 'react'
import { useTranslation } from 'react-i18next';

const CartHeader = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <thead>
        <tr>
          <th className="count">{t('cart.table.number')}</th>
          <th className="pro">{t('cart.table.pro')}</th>
          <th className="info">{t('cart.table.info')}</th>
          <th className="privce">{t('cart.table.price')}</th>
          <th className="num">{t('cart.table.count')}</th>
          <th className="sum">{t('cart.table.priceTotal')}</th>
          <th className="delete">{t('cart.table.del')}</th>
        </tr>
      </thead>
    </React.Fragment>
  );
}


export default CartHeader