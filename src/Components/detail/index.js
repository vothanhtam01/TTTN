import React, { useEffect, useState } from 'react';
import { BreadCrum, ListTheme, ListImg } from '../mixin/mixin'
import DetailPro from './detail__pro'
import Tag from './tag'
import { TittlePart, Togle } from '../mixin/mixin'
import { list_item, list_img } from '../../database/datatext'
import { getProduct, getData } from '../../database/db'
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import SameItem from './SameItem'

const Detail = (props) => {

  const [product, setProduct] = useState(Object);
  const dispatch = useDispatch()
  const { t } = useTranslation();
  const id = props.match.params.id;
  const [same, setSame] = useState(Object)
  const [Bool, setBool] = useState(false)


  useEffect(() => {
    const GetProduct = async () => {
      const pro = await getProduct(id)
      await setProduct(pro)
      const GetData = async () => {
        const get = await getData(`products`)
        setSame(sameProduct(get, pro))
        setBool(true)
      }
      GetData()
    }
    GetProduct()
  }, [dispatch, id])

  const sameProduct = (items, pro) => {
    return (items.filter((item) => pro.category === item.category && pro.id !== item.id)).slice(0, 3)
  }

  if (product) {
    return (
      <React.Fragment>
        <BreadCrum path="Sản phẩm" />
        <section className="main__list">
          <div className="container">
            <div className="row">
              <div className="left__item">
                <ListTheme items={list_item} />
                <ListImg items={list_img} />
              </div>
              <div className="right__item">
                <DetailPro item={product} />
                <Tag id={id} />
                <div className="product__same">
                  <div className="same__title">
                    <TittlePart text={t('common.same')} />
                    <Togle></Togle>
                    {Bool ? <SameItem items={same} /> : <div></div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
  else {
    return (
      <React.Fragment>

      </React.Fragment>
    )
  }

}

export default Detail
