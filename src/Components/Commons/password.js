import React from 'react'
import { useTranslation } from 'react-i18next';


const Password = (props) => {

  const { t } = useTranslation();
  const { newPass, setNew, confirm, setConfirm, pass, setPass, submitPass } = props

  return (
    <React.Fragment>
      <form action="" onSubmit={submitPass} className="modal-box-content-form-right -form">
        <div className="modal-box-content-form-right__top">
          <h2>{t('user.5')}</h2>
          <p>{t('user.6')}</p>
        </div>
        <hr />
        <div className="modal-box-content-form-right__content">
          <div className="input-container"><input type="password" required="required" value={newPass}
            onChange={e => setNew(e.target.value)} /><label >New password</label>
            <div className="bar"></div>
          </div>
          <div className="input-container"><input type="password" required="required" value={confirm}
            onChange={e => setConfirm(e.target.value)} /><label >Confirm</label>
            <div className="bar"></div>
          </div>
          <div className="input-container"><input type="password" required="required" value={pass}
            onChange={e => setPass(e.target.value)} /><label >Old Password</label>
            <div className="bar"></div>
          </div>
        </div>
        <hr />
        <div className="modal-box-content-form-right__bottom"><input type="submit" onSubmit={submitPass} value="SAVE PASSWORD"></input></div>
      </form>
    </React.Fragment>
  )
}

export default Password