import React, { useState, useEffect } from 'react'
import CanvasJSReact from '../../../assets/canvasjs.react'
import { optionsUser } from '../../../database/datatext'

const UserChart = (props) => {

  const { tit, items } = props
  let CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const [Data, setData] = useState([])
  const [Data1, setData1] = useState([])

  useEffect(() => {
    const DataFake = []
    const DataFake1 = []
    for (let item of items) {
      DataFake.push({
        label: item.username,
        y: item.sumPay,
      })
    }
    for (let item of items) {
      DataFake1.push({
        label: item.username,
        y: item.sumPro,
      })
    }
    setData(DataFake)
    setData1(DataFake1)
  }, [])


  return (
    <React.Fragment>
      <div className="chart">
        <div>
          <CanvasJSChart options={optionsUser(tit, Data, Data1)}
          />
        </div>
      </div>
    </React.Fragment>
  )

}

export default UserChart