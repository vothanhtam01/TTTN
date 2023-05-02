import React, { useState } from 'react';
import { TittlePart, Togle, ListTheme, upPage, downPage } from '../mixin/mixin'
import { item_theme } from '../../database/datatext'
import { useTranslation } from 'react-i18next';
import { ProductItem } from '../mixin/mixin'


const HightLight = (props) => {

  const { t } = useTranslation();
  const { items, add } = props
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(6)


  return (
    <React.Fragment>
      <section className="highlights">
        <div className="container">
          <div className="row">
            <div className="highltghts__title">
              <TittlePart text={t('common.highlight')} />
              <Togle up={() => upPage(num1, num2, setNum1, setNum2, items, 6)} down={() => downPage(num1, num2, setNum1, setNum2, items, 6)}></Togle>
            </div>
          </div>
          <div className="row">
            <div className="highlights__product">
              <div className="left__item">
                <ListTheme items={item_theme} />
              </div>
              <div className="right__item">
                <div className="list__product">
                  <ProductItem items={items.slice(num1, num2)} add={add} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default HightLight



