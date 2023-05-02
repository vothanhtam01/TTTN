import React ,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fontawesome-free-5.12.0-web/css/all.css'
import 'react-widgets/dist/css/react-widgets.css';
import allReducers from './reducers/index'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import './i18n';

let store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(

  <Provider store={store}>
    <Suspense fallback={(<div className="loader"></div>)}>
      <App />
    </Suspense>
  </Provider>

  , document.getElementById('root'));

serviceWorker.unregister();
