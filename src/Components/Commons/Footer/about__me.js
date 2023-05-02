import React from 'react'
import { about_policy, about__service, about_info, about_connect } from '../../../database/datatext'
import { useTranslation } from 'react-i18next';


const AboutMe = () => {
  
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <section className="about__me">
        <div className="container">
          <div className="row">
            <div className="about__item -large">
              <h3>
                <i className="fa fa-th-large" />
                {t('footer.infor.1')}
            </h3>
              <p>{t('footer.infor.2')}</p>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt" />
                  <p>{t('footer.infor.3')}</p>
                </li>
                <li>
                  <i className="fas fa-envelope" />
                  <p>{t('footer.infor.4')}</p>
                </li>
                <li>
                  <i className="fas fa-mobile-alt" />
                  <p>{t('footer.infor.5')}</p>
                </li>
              </ul>
            </div>
            <AboutItem title="CHÍNH SÁCH" listItem={about_policy} />
            <AboutItem title="DỊCH VỤ & HỖ TRỢ" listItem={about__service} />
            <AboutItem title="TIN TỨC-SỰ KIỆN" listItem={about_info} />
            <AboutItem title="KÊT NỐI" listItem={about_connect} />

          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default AboutMe

const AboutItem = (props) => {
  const { title, listItem } = props
  return (
    <React.Fragment>
      <div className="about__item">
        <h3>
          <i className="fa fa-th-large" />
          {title}
        </h3>
        <ul>
          {listItem.map((item, index) =>
            <li key={index}>
              <p>
                <i className={item.icon}></i>
                {item.text}
              </p>
            </li>
          )}
        </ul>
      </div>
    </React.Fragment>
  )
}