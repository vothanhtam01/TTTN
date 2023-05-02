import React from 'react';
import { useTranslation } from 'react-i18next';


const FootList = (props) => {

  const { page, lastPage, firstPage, changePage } = props
  const { t } = useTranslation();

  const PageNumber = (page) => {
    let Page = []
    for (let i = 1; i <= page; i++) {
      Page = [...Page, i]
    }
    return Page
  }

  return (
    <div className="list__footer">
      <span onClick={firstPage} style={{ cursor: 'pointer' }}> {t('grid.first')}
      </span>
      {PageNumber(page).map((item, index) => (
        <span key={index} onClick={() => changePage(item)} style={{ cursor: 'pointer' }}>{item}</span>
      ))}
      <span onClick={lastPage} style={{ cursor: 'pointer' }}> {t('grid.last')}</span>
    </div>
  )
}

export default FootList