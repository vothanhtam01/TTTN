import React, { useState } from 'react';
import { TittlePart, Togle, ListNew, upPage, downPage } from '../mixin/mixin'
import { useTranslation } from 'react-i18next';
import { ProductLast } from '../mixin/mixin'


const Lastest = (props) => {

  const { t } = useTranslation();
  const { new_theme, items, add } = props
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(4)

  return (
    <React.Fragment>
      <section className="lastest">
        <div className="container">
          <div className="row">
            <div className="title__last">
              <TittlePart text={t('common.lasest')} />
              {/* <ListNew items={new_theme}></ListNew> */}
              <Togle up={() => upPage(num1, num2, setNum1, setNum2, items, 4)} down={() => downPage(num1, num2, setNum1, setNum2, items, 4)}></Togle>
            </div>
          </div>
          <div className="row">
            <ProductLast items={items.slice(num1, num2)} add={add} />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Lastest