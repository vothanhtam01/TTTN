import React from 'react'


const Total = (props) => {

  const { items, number } = props

  return (
    <React.Fragment>
      {items.map((item, index) => (
        <div className="total" key={index}>
          <div className="text">
            <h4>{item.text1}</h4>
            <p>{item.text2}</p>
          </div>
          <div className="number">
            <h3>{number[index]}</h3>
          </div>
        </div>
      ))}
    </React.Fragment>
  )
}

export default Total