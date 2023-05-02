import React from 'react'
import Row from './Row';
import { useTranslation } from 'react-i18next';
import { formatDate } from '../mixin/mixin';


const TableForm = (props) => {

  const { carts, setCheck, setOrder } = props
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div className="modal-box-content-form-right -table">
        <div className="scroll-table">
          <table  >
            <thead>
              <tr>
                <th>{t('user.stt')}</th>
                <th>{t('user.date')}</th>
                <th>{t('user.total')}</th>
                <th>{t('user.status')}</th>
              </tr>
              {
                carts.map((e, i) => {
                  let date = new Date();
                  date.setTime(e.timeOrder);
                  return (
                    <Row element={e} date={formatDate(date)} key={i} setCheck={setCheck} setOrder={setOrder}></Row>
                  )
                })
              }
            </thead>
          </table>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TableForm