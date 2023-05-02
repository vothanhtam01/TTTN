import React, { useState } from "react";
import { TittlePart, Togle, ListNew, upPage, downPage } from "../mixin/mixin";
import { useTranslation } from "react-i18next";
import { ProductItem } from "../mixin/mixin";

const Hot = (props) => {
  const { t } = useTranslation();
  const { new_theme, items, add } = props;
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(3);
  return (
    <React.Fragment>
      <section className="hot">
        <div className="container">
          <div className="row">
            <div className="hot__title">
              <TittlePart text={t("common.hot")} />
              {/* <ListNew items={new_theme}></ListNew> */}
              <Togle
                up={() => upPage(num1, num2, setNum1, setNum2, items, 3)}
                down={() => downPage(num1, num2, setNum1, setNum2, items, 3)}
              ></Togle>
            </div>
          </div>
          <div className="row">
            <ProductItem items={items.slice(num1, num2)} add={add} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hot;
