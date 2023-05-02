import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'


export const TittlePart = (props) => {
  const { text } = props
  return (
    <div className="title__text">
      <h3>
        <i className="fa fa-th-large" />
        {text}
      </h3>
    </div>
  )
}

export const Togle = (props) => {
  const { up, down } = props
  return (
    <div className="title__togle">
      <div className="togle -left" style={{ cursor: 'pointer' }} onClick={up}>
        <i className="fa fa-caret-right" />
      </div>
      <div className="togle -right" style={{ cursor: 'pointer' }} onClick={down}>
        <i className="fa fa-caret-left" />
      </div>
    </div>
  )
}

export const ListTheme = (props) => {
  const { items } = props
  return (
    <ul>
      {items.map((item, index) => {
        if (index === 0) {
          return (
            <li className="-active" key={index}>
              <a>
                <i className={item.icon} />
                {item.text}
              </a>
              <i className="fas fa-angle-down -hide" />
            </li>
          )
        }
        else {
          return (
            <li key={index}>
              <a>
                <i className="fa fa-th-large"></i>
                {item.text}
              </a>
              <i className="fas fa-angle-down -hide" />
            </li>
          )
        }
      })}
    </ul>
  )
}


export const ListColor = (props) => {
  const { items } = props;

  return (
    <ul>
      {items.map((item, index) => {
        if (index === 0) return (
          <li className="-active" key={index}>
            <a>
              <i className={item.icon} />
              {item.text}
            </a>
            <i className="fas fa-angle-down -hide" />
          </li>
        )
        else return (
          <li key={index}>
            <a>
              <span style={{ backgroundColor: item.color }} />
              {item.text}
            </a>
          </li>)
      })}
    </ul>

  )
}

export const ListImg = (props) => {

  const { t } = useTranslation();
  const { items } = props

  return (
    <ul>
      {items.map((item, index) => {
        if (index === 0)
          return (
            <li className="-active" key={index}>
              <a href="#">
                <i className={item.icon} />
                {item.text}
              </a>
              <i className="fas fa-angle-down -hide" />
            </li>
          )
        else return (
          <li key={index}>
            <div className="list__img">
              <div className="img__link">
                <img className="img" src={item.img} />
              </div>
              <div className="img__info">
                <a href="#">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </a>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export const ListNew = (props) => {
  const { items } = props
  return (
    <div className="title_list">
      {items.map((item, index) =>
        <a href="#" key={index}> {item}
        </a>)}
    </div>
  )
}



export const BreadCrum = (props) => {
  const { path } = props
  return (
    <div className="container">
      <div className="row">
        <div className="breadcrumb">
          <span>{("Home")}</span>
          <span> / </span>
          <span>{(path)}</span>
        </div>
      </div>
    </div>
  )
}

export const formatter = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'VND',
  minimumFractionDigits: 0
})

export const checkInclude = (data, item) => {
  let bool = false
  data.forEach(cartOnly => {
    if (cartOnly.id === item.id)
      bool = true
  });
  return bool
}

export const displayStar = (countRate) => {
  if (countRate > 0) {
    let element = []
    for (let i = 1; i <= countRate; i++) {
      element.push(<i key={i} className="fa fa-star" />)
    }
    for (let i = 1; i <= (5 - countRate); i++) {
      element.push(<i key={countRate + i} className="far fa-star" />)
    }
    return element;
  } else {
    return (
      <React.Fragment>
        <i className="far fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
      </React.Fragment>
    );
  }
}


export const TotalMoney = (data) => {
  let totalMoney = 0
  data.map(item => {
    totalMoney += (item.price * item.quantity)
  })
  return totalMoney
}

export const formatDate = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}

export const TotalQuan = (data) => {
  let totalQuantity = 0
  data.map(item => {
    totalQuantity += parseInt(item.quantity)
  })
  return totalQuantity
}

export const localUrl = window.location.protocol + "//" + window.location.host;

export const ProductItem = (props) => {

  const { items, add } = props
  const { t } = useTranslation();

  return (
    <React.Fragment>
      {items.map((item, index) => (
        < div className="product__item" key={index}>
          <div className="item__img">
            <img src={item.image} alt="logo" className="img"></img>
          </div>
          <div className="item__info">
            <h4 className="-price">{formatter.format(item.price)}</h4>
            <h4>{item.name}</h4>
            <p>
              {displayStar(Math.round(item.countRate / item.votes))}
              <br />
              {item.votes + " ( " + t('common.rate') + " )"}
            </p>
          </div>
          <div className="item__button">
            <Link className="-left" to="/login" onClick={(e) => { add(e, item) }
            }>{t('button.buyNow')}</Link>
            <a className="-right" href={localUrl + "/detail/" + item.id} >{t('button.detail')}</a>
          </div>
        </div >
      ))}
    </React.Fragment>
  )
}


export const ProductLast = (props) => {
  const { items, add } = props
  const { t } = useTranslation();

  return (
    <React.Fragment>
      {
        items.map((item, index) => (
          <div className="product__last -hide" key={index}>
            <div className="img__last">
              <img src={item.image} alt="logo" className="img"></img>
            </div>
            <div className="text__last">
              <h4>{item.name}</h4>
              <p>
                {displayStar(Math.round(item.countRate / item.votes))}
                {item.votes + " ( " + t('common.rate') + " )"}
              </p>
              <p>{t('Nội thất đẹp, giá rẻ,chất lượng đảm bảo')}</p>
              <h4 className="-price">{formatter.format(item.price)}</h4>
              <div className="item__button">
                <Link className="-left" to="/login" onClick={(e) => { add(e, item) }
                }>{t('button.buyNow')}</Link>
                <a className="-right" href={localUrl + "/detail/" + item.id} >{t('button.detail')}</a>
              </div>
            </div>
          </div>
        ))
      }
    </React.Fragment>
  )
}

export const upPage = (num1, num2, setNum1, setNum2, items, num) => {
  if (window.innerWidth > '768') {
    if (num1 + num < items.length) {
      setNum1(num1 + num)
      setNum2(num2 + num)
    }
    else {
      setNum1(0)
      setNum2(num)
    }
  }
  else {
    if (num1 + 1 < items.length) {
      setNum1(num1 + 1)
      setNum2(num2 + 1)
    }
    else {
      setNum1(0)
      setNum2(num)
    }
  }

}
export const downPage = (num1, num2, setNum1, setNum2, items, num) => {
  if (window.innerWidth > '768') {
    if (num1 - num > -1) {
      setNum1(num1 - num)
      setNum2(num2 - num)
    }
    else {
      setNum1((parseInt(items.length / num) + 1) * num - num)
      setNum2((parseInt(items.length / num) + 1) * num)
    }
  }
  else if (num1 - 1 > -1) {
    setNum1(num1 - num)
    setNum2(num2 - num)
  }
  else {
    setNum1((parseInt(items.length / num) + 1) * num - num)
    setNum2((parseInt(items.length / num) + 1) * num)
  }
}

export const rate = (vote, count) => {
  if (vote === 0) {
    return 0
  }
  else {
    return count / vote
  }
}