import React from 'react'
import Info from './Info'
import Comment from './comment'
import { useTranslation } from 'react-i18next';

const Tag = (props) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div className="product__tag">
        <div className="tag__item">
          <a className="-active -left" href="#" onClick={(e) => {
            e.preventDefault();
          }}>{t('detail.info')}</a>
        </div>
        <Info />
        <div className="tag__item">
          <a href="#" className="-active -left" onClick={(e) => {
            e.preventDefault();
          }}>{t('detail.cmt')}</a>
        </div>
        <Comment id={props.id}/>
      </div>
    </React.Fragment>
  )
}


export default Tag