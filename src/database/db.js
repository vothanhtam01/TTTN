import axios from 'axios'

const url = "http://localhost:3000";

export const getData = (page) => {
  return axios.get(`${url}/${page}`)
    .then(res => {
      return res.data
    })
    .catch(error => window.location.pathname = ('/error'))
}

export const RegisUser = (data) => { //  them user moi vao json
  console.log(data)
  console.log("123333333333333333333333333333333333333333333333333333")
  return axios.post(`${url}/user`, data)
    .then(res => {
      return res.data
    })
    .catch(error => 
    //  console.log(error)
      window.location.pathname = ('/error')
      )
  
}

export const getProduct = (id) => {
  return axios.get(`${url}/products/${id}`)
    .then(res => {
      return res.data
    })
    .catch(error => window.location.pathname = ('/error'))
}

export const updateUser = (user) => {
  return axios.put(`${url}/user/${user.id}`, user)
    .then(res => {
      return res.data
    })
    .catch(error => window.location.pathname = ('/error'))
}

export const updateProduct = (product) => {
  return axios.put(`${url}/products/${product.id}`, product)
    .then(res => {
    })
    .catch(error => window.location.pathname = ('/error'))
}

export const updateHistory = (history) => {
  return axios.post(`${url}/carts`, history)
    .then(res => {
    })
    .catch(error => window.location.pathname = ('/error'))

}

export const updatePro = (product) => {
  return axios.put(`${url}/products/${product.id}`, product)
    .then(res => {
      return res.data
    })
    .catch(error => window.location.pathname = ('/error'))
}

export const getCartsByUser = (username) => {
  return axios.get(`${url}/carts?username=${username}`)
    .then(res => {
      return res.data
    })
    .catch(error => window.location.pathname = ('/error'))
}

export const deleteUser = (user) => {
  return axios.delete(`${url}/user/${user.id}`)
    .then(res => {
      return res.data
    })
    .catch(error => window.location.pathname = ('/error'))
}

export const deleteProduct = (product) => {
  return axios.delete(`${url}/products/${product.id}`)
    .then(res => { })
    .catch(error => window.location.pathname = ('/error'))
}

export const getAdmin = () => {
  return axios.get(`${url}/user/1`)
    .then(res => {
      return res.data
    })
    .catch(error => window.location.pathname = ('/error'))
}

export const getByUser = (username) => {
  return axios.get(`${url}/user?username=${username}`)
    .then(res => {
      return res.data[0]
    })
    .catch(error => window.location.pathname = ('/error'))
}

export const updateCart = (item) => {
  return axios.put(`${url}/carts/${item.id}`, item)
    .then(res => {
      return res.data
    })
    .catch(error => window.location.pathname = ('/error'))
}

export const addNewProduct = (data) => {
  return axios.post(`${url}/products`, data)
    .then(res => { })
    .catch(error => window.location.pathname = ('/error'))
}

export const getCart = (id) => {
  return axios.get(`${url}/carts/${id}`)
    .then(res => {
      return res.data
    })
    .catch(error => window.location.pathname = ('/error'))
}