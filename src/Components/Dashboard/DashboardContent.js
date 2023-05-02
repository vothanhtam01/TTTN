import React from 'react';
import RoutersAdmin from './RouterAdmin'
import LeftItem from './LeftItem'

const DashboardContent = () => {

  return (
    <React.Fragment>
      <LeftItem />
      <div className="content-dashboard">
        {<RoutersAdmin />}
      </div>
    </React.Fragment >
  )
}

export default DashboardContent;