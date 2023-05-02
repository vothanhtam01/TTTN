import React, { useState } from "react";
import * as img__Arr from "../../img/index";
import { DropdownList } from "react-widgets";
import { useTranslation } from "react-i18next";
import { formatter } from "../mixin/mixin";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { checkInclude } from "../mixin/mixin";
import { addtoCart, UpdateDetailQuantity } from "../../action/action";
import { updateUser, updateProduct } from "../../database/db";
import { FacebookShareButton, FacebookIcon } from "react-share";

const url = window.location.protocol + "//" + window.location.host;

const DetailPro = (props) => {
  const { item } = props;
  const ListSize = ["1800 x 90 x 90 ", "1600 x 60 x60", "1200 x 40 x 40"];
  const ListColor = [
    "Đỏ",
    "Vàng",
    "Trắng",
    "Đen",
    "Xi măng",
    "Xám",
  ];
  const [amount, setAmount] = useState(1);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const [rate, setRate] = useState(0);

  const handleChange = (e) => {
    const target = e.target;
    const { value } = target;
    setAmount(value);
  };

  const AddToCart = async (e, item) => {
    if (JSON.parse(sessionStorage.getItem("userData"))) {
      e.preventDefault();
      if (cart.length === 0) {
        updateCart(item);
      } else if (!checkInclude(cart, item)) {
        updateCart(item);
      } else {
        user.cart = cart.map((pro) =>
          pro.id === item.id
            ? { ...pro, quantity: parseInt(pro.quantity) + parseInt(amount) }
            : pro
        );
        dispatch(UpdateDetailQuantity(item.id, amount));
        await updateUser(user);
        alert(t("detail.update"));
      }
    } else {
      alert(t("detail.warning"));
    }
  };

  const updateCart = async (item) => {
    item.quantity = amount;
    user.cart = [...user.cart, item];
    dispatch(addtoCart(item));
    await updateUser(user);
    alert(t("detail.addCart"));
  };

  const rateHandler = (index) => {
    for (let i = 1; i <= 5; i++) {
      document.querySelector(`.star i:nth-child(${i})`).className =
        "far fa-star";
    }
    for (let i = 1; i <= index; i++) {
      document.querySelector(`.star i:nth-child(${i})`).className =
        "fa fa-star";
    }
    setRate(index);
  };

  const submitFeedback = async (e) => {
    e.preventDefault();
    if (JSON.parse(sessionStorage.getItem("userData"))) {
      if (rate === 0) {
        alert(t("detail.feedback"));
      } else {
        let newProduct = { ...item };
        newProduct.countRate += rate;
        newProduct.votes += 1;
        await updateProduct(newProduct);
        alert(t("detail.popup"));
        window.location.reload();
      }
    } else {
      alert(t("detail.warning"));
      window.location.href = url + "/login";
    }
  };

  const displayStar = (countRate) => {
    if (countRate > 0) {
      let element = [];
      for (let i = 1; i <= countRate; i++) {
        element.push(
          <i key={i} className="fa fa-star" onClick={() => rateHandler(i)} />
        );
      }
      for (let i = 1; i <= 5 - countRate; i++) {
        element.push(
          <i
            key={countRate + i}
            className="far fa-star"
            onClick={() => rateHandler(countRate + i)}
          />
        );
      }
      return element;
    } else {
      return (
        <React.Fragment>
          <i className="far fa-star" onClick={() => rateHandler(1)} />
          <i className="far fa-star" onClick={() => rateHandler(2)} />
          <i className="far fa-star" onClick={() => rateHandler(3)} />
          <i className="far fa-star" onClick={() => rateHandler(4)} />
          <i className="far fa-star" onClick={() => rateHandler(5)} />
        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment>
      <div className="product__detail">
        <div className="product__detail__img">
          <img src={url + "/" + item.image} className="img"></img>
          <div className="product__detail__bonus">
            <img className="img" src={img__Arr.product1} />
            <img className="img" src={img__Arr.product3} />
            <img className="img" src={img__Arr.product4} />
            <img className="img" src={img__Arr.product5} />
            <img className="img" src={img__Arr.product2} />
          </div>
        </div>
        <div className="product__detail__info">
          <h3>{item.name}</h3>
          <p className="star">
            {displayStar(Math.round(item.countRate / item.votes))}
            {item.votes + " ( " + t("common.rate") + " )"}
            <span />
            <a href="#" onClick={submitFeedback}>
              {t("common.feedback")}
            </a>
          </p>
          <h4>{formatter.format(item.price)}</h4>
          <h5>{t("detail.infoDetail")}</h5>
          <p>{t("detail.content")}</p>
          <div className="info__dropdown">
            <div className="dropdown__item">
              <h5>{t("Size:")}</h5>
              <DropdownList
                defaultValue={t("detail.size")}
                data={ListSize}
                style={{ maxWidth: "157px" }}
              />
            </div>
            <div className="dropdown__item">
              <h5>{t("Màu sắc:")}</h5>
              <DropdownList
                defaultValue={t("detail.color")}
                data={ListColor}
                style={{ maxWidth: "157px" }}
              />
            </div>
          </div>
          <div className="info__count">
            <div className="count__input">
              <input
                value={amount}
                type="number"
                min="1"
                name="number"
                onChange={handleChange}
              />
            </div>
            <div className="count__buy">
              <Link
                to="/login"
                onClick={(e) => {
                  AddToCart(e, item);
                }}
              >
                {t("button.buyNow")}
              </Link>
            </div>
            <div className="share">
              <FacebookShareButton url={url + `/detail/${item.id}`}>
                <FacebookIcon size={39} />
              </FacebookShareButton>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default DetailPro;
