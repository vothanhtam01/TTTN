import React, { useState, useEffect } from 'react';
import avatarUser from '../../img/admin-ui.svg';
import { useTranslation } from 'react-i18next';
import { updateUser, getCartsByUser } from '../../database/db';
import { getUserData } from '../../action/action'
import { useDispatch } from 'react-redux';
import UserForm from './userForm';
import TableForm from './tableForm'
import Password from './password'
import InfoCart from './infoCart'


function hideModal() {
  document.querySelector('.modal-box').style.transform = 'scale(0)';
  document.querySelector('.modal-box').style.zIndex = 0;
  document.querySelector('.modal-box').style.opacity = 0;
}

const checkPhone = (phone) => {
  let bool = true
  for (let index in phone) {
    let a = parseInt(phone[index])
    if (isNaN(a)) {
      bool = false;
      break;
    }
  }
  return bool
}

const ModalBox = (props) => {
  const { t } = useTranslation();
  const [user, setUser] = useState(props.user)
  const [nameUser,setname] = useState(props.user.name)
  const [carts, setCarts] = useState([])
  const [confirm, setConfirm] = useState("");
  const [newPass, setNew] = useState("")
  const [pass, setPass] = useState("")
  const dispatch = useDispatch();
  const [checkTab, setCheck] = useState(1)
  const [order, setOrder] = useState(0)


  useEffect(() => {
    const GetCarts = async () => {
      const allCarts = await getCartsByUser(user.username);
      setCarts(allCarts)
    }
    GetCarts();
  }, [dispatch])

  const handleChange = (e) => {
    const target = e.target;
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!checkPhone(user.phone)) {
      alert(t('register.warning.phone'))
    }
    else if (user.password !== pass) {
      alert(t('register.warning.confirmPass'))
    }
    else {
      await updateUser(user)
      dispatch(getUserData(user))
      alert(t('dashboard.warning.3'))
      window.location.reload()
    }
  }

  const submitPass = async (e) => {
    e.preventDefault()
    if (newPass !== confirm) {
      alert(t('register.warning.confirmPass'))
    }
    else if (user.password !== pass) {
      alert(t('register.warning.confirmPass'))
    }
    else if (newPass === user.username) {
      alert(t('register.warning.same'))
    }
    else {
      user.password = confirm
      await updateUser(user)
      dispatch(getUserData(user))
      alert(t('dashboard.warning.3'))
      window.location.reload()
    }
  }

  const switchTab = (checkTab) => {
    if (checkTab === 1) {
      return <UserForm submitHandler={submitHandler} user={user} setPass={setPass} handleChange={handleChange} pass={pass} />
    } else if (checkTab === 2) {
      return <TableForm carts={carts} setCheck={setCheck} setOrder={setOrder} />
    }
    else if (checkTab === 3) {
      return <Password pass={pass} setPass={setPass} newPass={newPass} setNew={setNew} confirm={confirm} setConfirm={setConfirm} submitPass={submitPass} />
    }
    else {
      return <InfoCart order={order} setCheck={setCheck} />
    }
  }

  return (
    <React.Fragment>
      <div className="modal-box">
        <div className="modal-box__background" onClick={hideModal}></div>
        <div className="modal-box-content"><span className="modal-box-content__close" onClick={hideModal}>X</span>
          <div className="modal-box-content-form">
            <div className="modal-box-content-form-left">
              <div className="modal-box-content-form-left-block">
                <div className="modal-box-content-form-left-block__infor">
                  <h2>{nameUser}</h2>
                  <p>{user.addrres}</p>
                </div>
                <div className="modal-box-content-form-left-block__avatar"><img src={avatarUser} alt="a" /></div>
              </div>
              <div className="modal-box-content-form-left-block">
                <p className="modal-box-content-form-left-block__tab -active" onClick={() => {
                  setCheck(1)
                  document.querySelector('.modal-box-content-form-left-block__tab:nth-child(1)').classList.add('-active');
                  document.querySelector('.modal-box-content-form-left-block__tab:nth-child(2)').classList.remove('-active');
                  document.querySelector('.modal-box-content-form-left-block__tab:nth-child(3)').classList.remove('-active');

                }}>{t('user.1')}</p>
                <p className="modal-box-content-form-left-block__tab" onClick={() => {
                  setCheck(2)
                  document.querySelector('.modal-box-content-form-left-block__tab:nth-child(1)').classList.remove('-active');
                  document.querySelector('.modal-box-content-form-left-block__tab:nth-child(2)').classList.add('-active');
                  document.querySelector('.modal-box-content-form-left-block__tab:nth-child(3)').classList.remove('-active');

                }}>{t('user.3')}</p>
                <p className="modal-box-content-form-left-block__tab" onClick={() => {
                  setCheck(3)
                  document.querySelector('.modal-box-content-form-left-block__tab:nth-child(1)').classList.remove('-active');
                  document.querySelector('.modal-box-content-form-left-block__tab:nth-child(3)').classList.add('-active');
                  document.querySelector('.modal-box-content-form-left-block__tab:nth-child(2)').classList.remove('-active');
                }}>{t('user.4')}</p>
              </div>
            </div>
            {switchTab(checkTab)}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}


export default ModalBox;