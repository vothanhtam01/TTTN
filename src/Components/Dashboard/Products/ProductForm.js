import React, { useState, useEffect } from 'react';
import defaultImg from '../../../img/default.jpg';
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next';
import { updateProduct, addNewProduct } from '../../../database/db'
import { DropdownList } from 'react-widgets';
import { getProductData } from '../../../action/action';

const urlUpload = 'http://localhost:2019/uploadfile';

const ProductForm = () => {
  const categories = ["Bàn", "Ghế", "Giường ", "Phụ kiện"]
  const product = useSelector(state => state.products)
  const [Product, setProduct] = useState(product || Object)
  const [imgProduct, setImgProduct] = useState(undefined)
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const [Bool, setBool] = useState(true);

  useEffect(() => {
    setProduct(product)
    if (product.length != []) {
      setImgProduct(process.env.PUBLIC_URL + "../" + product.image)
      setBool(false)
    }
  }, [product])

  const handleChange = (e) => {
    const target = e.target;
    const { name, value } = target;
    setProduct({ ...Product, [name]: value });
  }

  const handleConfirm = async () => {
    if (Bool) {
      if (!Product.name || !Product.price || !Product.category) {
        alert(t('register.warning.fill'))
      }
      else {
        Product.votes = 0
        Product.countRate = 0
        Product.bought = 0
        Product.timeActive = 0
        Product.price = parseInt(Product.price)
        Product.addNewDate = new Date().getTime();
        if (document.getElementById("file-upload").files[0] == undefined) {
          Product.image = "image/default.jpg"
        }
        setProduct(Product)
        await addNew(Product)
      }
    } else {
      if (!Product.name || !Product.price === "" || !Product.bought === "" || !Product.category) {
        alert(t('register.warning.fill'))
      }
      else if (!checkPhone(Product.price)) {
        alert(t('dashboard.warning.4'))
      }
      else {
        Product.price = parseInt(Product.price)
        setProduct(Product)
        await update(Product)
      }
    }
  }

  const upload = async () => {
    const myFileInputs = document.getElementById("file-upload")

    const formData = new FormData()
    formData.append('myFile', myFileInputs.files[0])

    await fetch(urlUpload, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        const imgName = "image/" + data.filename
        const newDate = new Date()
        setProduct({ ...Product, image: imgName, addNewDate: newDate.getTime() })
      })
  }

  const update = async (product) => {
    if (window.confirm(t('dashboard.warning.1'))) {
      await updateProduct(product)
      alert(t('dashboard.warning.3'))
      window.location.reload();
    }
  }

  const addNew = async (product) => {
    if (window.confirm(t('dashboard.warning.1'))) {
      console.log(product);
      await addNewProduct(product)
      alert(t('dashboard.products.12'))
      window.location.reload();
    }
  }

  const previewImage = (event) => {
    let reader = new FileReader();
    let imageField = document.getElementById("image-field");

    reader.onload = () => {
      if (reader.readyState === 2) {
        imageField.src = reader.result;
      }
    }

    reader.readAsDataURL(event.target.files[0]);
    upload()
  }

  const displayAddForm = () => {
    dispatch(getProductData([]))
    setImgProduct(undefined)
    setBool(true)
    document.getElementById("dis__button").removeAttribute("disabled");
    document.getElementById("file-upload").removeAttribute("disabled");
    document.getElementById("upload-btn").removeAttribute("disabled");
  }

  return (
    <React.Fragment>
      <div className="add-btn" onClick={displayAddForm}>
        <i className="fas fa-folder-plus"></i>
      </div>
      <div className="content-dashboard-profile">
        <div className="content-dashboard-profile-left -products">
          <div className="content-dashboard-profile-left__img"><img src={imgProduct || defaultImg} alt="a" id="image-field" /></div>
          <div className="content-dashboard-profile-left__upload">
            <input id="file-upload" type="file" onChange={previewImage} disabled />
            <button id="upload-btn" disabled>{t('dashboard.products.8')}</button>
          </div>
        </div>
        <div className="content-dashboard-profile-right -products">
          <div className="content-dashboard-profile-right__top">
            <h2>{Bool ? t('dashboard.products.10') : t('dashboard.products.5')}</h2>
            <p>{Bool ? t('dashboard.products.11') : t('dashboard.form.3')}</p>
          </div>
          <hr />
          <div className="content-dashboard-profile-right__content">
            <div className="input-container"><input type="text" required="required"
              value={Product.name || ""} name="name" onChange={handleChange} /><label
              >{t('dashboard.form.4')}</label>
              <div className="bar"></div>
            </div>
            <div className="input-container"><input type="text" required="required"
              value={Product.price || ""} name="price" onChange={handleChange} /><label
              >{t('dashboard.products.3')}</label>
              <div className="bar"></div>
            </div>
            {Bool ? "" : <div className="input-container"><input type="text" required="required"
              value={Product.bought || 0} name="bought" /><label
              >{t('dashboard.products.6')}</label>
              <div className="bar"></div>
            </div>}
            <div className="input-container">
              <DropdownList data={categories} value={Product.category || "Category"} onChange={(value) => setProduct({ ...Product, category: value })}></DropdownList>
            </div>
          </div>
          <hr />
          <div className="content-dashboard-profile-right__bottom" onClick={handleConfirm}><button id="dis__button" disabled >{Bool ? t('dashboard.products.9') : t('dashboard.form.10')}</button></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProductForm

const checkPhone = (phone) => {
  let b = true
  for (let index in phone) {
    let a = parseInt(phone[index])
    if (isNaN(a)) {
      b = false;
      break;
    }
  }
  return b
}