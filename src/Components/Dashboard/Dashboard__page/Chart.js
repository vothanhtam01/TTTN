import React, { useState, useEffect } from 'react'
import CanvasJSReact from '../../../assets/canvasjs.react'
import { optionsProduct } from '../../../database/datatext'


const ProductChart = (props) => {

  const { tit, items } = props
  let CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const [Data, setData] = useState([])
  const [Data1, setData1] = useState([])

  useEffect(() => {
    const DataFake = []
    const DataFake1 = []
    for (let item of items) {
      DataFake.push({
        label: `sp${item.id}`,
        y: item.price,
      })
    }
    for (let item of items) {
      DataFake1.push({
        label: `sp${item.id}`,
        y: item.bought,
      })
    }
    setData(DataFake)
    setData1(DataFake1)
  }, [])

  return (
    <React.Fragment>
      <div className="chart">
        <div>
          <CanvasJSChart  options={optionsProduct(tit, Data, Data1)}
          />
        </div>
      </div>
    </React.Fragment>
  )

}

export default ProductChart