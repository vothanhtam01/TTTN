import React from "react";
import { formatter, checkInclude, displayStar } from "../mixin/mixin";
import { useSelector } from "react-redux";
import { updateUser } from "../../database/db";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { addtoCart, updateOneCart, getUserCart } from "../../action/action";
import { Link } from "react-router-dom";

const SameItem = (props) => {
  const { items } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart); // lay du lieu card tu redux
  const localUrl = window.location.protocol + "//" + window.location.host;
  const url = window.location.protocol + "//" + window.location.host;

  const add = async (e, item) => { // ham them vao gio hang
    if (JSON.parse(sessionStorage.getItem("userData"))) { // kiem tra da dang nhap hay chua
      // e.preventDefault();
      if (cart.length === 0) {
        updateCart(item);
      } else if (!checkInclude(cart, item)) {
        updateCart(item);
      } else {
        dispatch(updateOneCart(item.id)); // neu san pham da co thi han them so luong
        dispatch(getUserCart(user.cart));
        sessionStorage.setItem("userData", JSON.stringify(user));
        await updateUser(user);
        alert(t("Đã cập nhật"));
      }
    } else {
      alert(t("Đăng nhập để mua ngay "));
    }
  };

  const updateCart = async (item) => {
    item.quantity = 1;
    user.cart = [...user.cart, item];
    dispatch(addtoCart(item));
    sessionStorage.setItem("userData", JSON.stringify(user));
    await updateUser(user);
    alert(t("Đã thêm vào giỏi hàng"));
  };

  return (
    <React.Fragment>
      <div className="same__item">
        {items.map((item, index) => (
          <div className="product__item" key={index}>
            <div className="item__img">
              <img src={url + "/" + item.image} className="img"></img>
            </div>
            <div className="item__info">
              <h4 className="-price">{formatter.format(item.price)}</h4>
              <h4>{item.name}</h4>
              <p>
                {displayStar(Math.round(item.countRate / item.votes))}
                <br />
                {item.votes + " ( " + t("common.rate") + " )"}
              </p>
            </div>
            <div className="item__button">
              <Link
                className="-left"
                to="/login"
                onClick={(e) => {
                  add(e, item);
                }}
              >
                {t("button.buyNow")}
              </Link>
              <a className="-right" href={localUrl + "/detail/" + item.id}>
                {t("button.detail")}
              </a>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default SameItem;
