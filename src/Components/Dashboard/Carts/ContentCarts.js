import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { getData, getCartsByUser } from '../../../database/db';
import ListCarts from './ListCarts';
import InfoCart from './infoCart'

const ContentCarts = () => {
  const [limit, setLimit] = useState(10)
  const [position, setPosition] = useState(200)
  const { t } = useTranslation();
  const [List, setList] = useState([]);
  const [status,setStatus] =  useState([]);
  const dispatch = useDispatch();
  const inputSearch = useRef("");
  const [Bool, setBool] = useState(true);
  const [check, setCheck] = useState(1)
  const [order, setOrder] = useState(0)


  useEffect(() => {
    const getCarts = async () => {
      const ListCarts = await getData('carts?_limit=' + limit);
      setList([...ListCarts])
      ListCarts.map(item=>{
        setStatus([...item.status])
      })
    }
    getCarts()
  }, [dispatch])

  const handleScroll = async (e) => {
    if (e.target.scrollTop >= position) {
      if (Bool) {
        const ListCarts = await getData('carts?_limit=' + (limit + 10));
        setList([...ListCarts])
        setLimit(limit + 10)
        setPosition(position + 700)
      } else {
        const ListCarts = await getCartsByUser(inputSearch.current.value + "&_limit=" + (limit + 10))
        setList([...ListCarts])
        setLimit(limit + 10)
        setPosition(position + 700)
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputSearch.current.value === "") {
      const ListCarts = await getData('carts?_limit=' + (limit + 10));
      setList([...ListCarts])
      setBool(true)
    } else {
      const ListCarts = await getCartsByUser(inputSearch.current.value + "&_limit=10")
      setList([...ListCarts])
      setLimit(10)
      setPosition(200)
      setBool(false)
    }
  }

  if (check === 1) {
    return (
      <React.Fragment>
        <form className="search-form" action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="Type username..." ref={inputSearch} />
          <input type="submit" value="Search" />
        </form>
        <div id="table-carts" className="table-scroll" style={{ maxHeight: "450px" }} onScroll={handleScroll}>
          <table className="content-dashboard-table">
            <thead>
              <tr>
                <th>{t('dashboard.carts.1')}</th>
                <th>{t('dashboard.carts.2')}</th>
                <th>{t('dashboard.carts.3')}</th>
                <th>{t('dashboard.carts.4')}</th>
                <th>{t('dashboard.carts.5')}</th>
              </tr>
              <ListCarts items={List} setCheck={setCheck} setOrder={setOrder} listStatus={status}></ListCarts>
            </thead>
          </table>
        </div>
      </React.Fragment>
    )
  }
  else {
    return (
      <React.Fragment>
        <InfoCart order={order} setCheck={setCheck} />
      </React.Fragment>
    )
  }
}

export default ContentCarts;