import React from 'react'
import { useTranslation } from 'react-i18next';

const Info = () => {

  const { t } = useTranslation();

  return (
    <div className="tag__text">
      <p>
        {t('detail.content')}
      </p>
      <p>
        {t('detail.content')}
    </p>
      <p>
        {t('detail.content')}
    </p>
    </div>
  )
}

export default Info