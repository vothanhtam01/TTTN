import React, { useState, useEffect } from 'react'
import CanvasJSReact from '../../../assets/canvasjs.react'
import { optionsCate } from '../../../database/datatext'

const Category = (props) => {

  const { tit, items } = props
  let CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const [Data, setData] = useState([])

  useEffect(() => {
    const DataFake = []
    for (let cate of items) {
      DataFake.push({
        y: cate.num, label: cate.text
      })
    }
    setData(DataFake)
  }, [])

  return (
    <React.Fragment>
      <div className="chart">
        <div>
          <CanvasJSChart options={optionsCate(tit, Data)}
          />
        </div>
      </div>
    </React.Fragment>
  )

}

export default Category