import React from 'react'
import { useTranslation } from 'react-i18next';
import { formatter } from '../mixin/mixin'


const UserForm = (props) => {

  const { user, submitHandler, handleChange, pass, setPass } = props
  const { t } = useTranslation();


  return (
    <React.Fragment>
      <form action="" onSubmit={submitHandler} className="modal-box-content-form-right -form">
        <div className="modal-box-content-form-right__top">
          <h2>{t('user.1')}</h2>
          <p>{t('user.2')}</p>
        </div>
        <hr />
        <div className="modal-box-content-form-right__content">
          <div className="input-container"><input type="text" required="required" value={user.name} name="name" onChange={handleChange} /><label >{t('dashboard.form.4')}</label>
            <div className="bar"></div>
          </div>
          <div className="input-container"><input type="text" required="required" value={user.phone} name="phone" onChange={handleChange} /><label >{t('dashboard.form.5')}</label>
            <div className="bar"></div>
          </div>
          <div className="input-container"><input type="text" required="required" value={user.mail} name="mail" onChange={handleChange} /><label >{t('dashboard.form.6')}</label>
            <div className="bar"></div>
          </div>
          <div className="input-container"><input type="text" required="required" value={user.addrres} name="addrres" onChange={handleChange} /><label >{t('dashboard.form.7')}</label>
            <div className="bar"></div>
          </div>
          <div className="input-container"><input type="text" required="required"
            value={user.sumPro} name="sumPro" onChange={e => e.preventDefault()} /><label
            >{t('dashboard.form.11')}</label>
            <div className="bar"></div>
          </div>
          <div className="input-container"><input type="text" required="required"
            value={formatter.format(user.sumPay) !== formatter.format(NaN) ? formatter.format(user.sumPay) : ""} name="sumPay" onChange={e => e.preventDefault()} /><label
            >{t('dashboard.form.12')}</label>
            <div className="bar"></div>
          </div>
          <div className="input-container"><input type="password" required="required" value={pass} name="password" onChange={e => setPass(e.target.value)} /><label > Password</label>
            <div className="bar"></div>
          </div>
        </div>
        <hr />
        <div className="modal-box-content-form-right__bottom"><input type="submit" onSubmit={submitHandler} value="SAVE DETAILS"></input></div>
      </form>
    </React.Fragment>
  )

}

export default UserForm