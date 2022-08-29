import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {createStore} from 'redux';
import { rootReducer } from './Reducers/rootReducer'; 
import { Provider } from 'react-redux'

import App from './App';
import Header from './Components/Header';
import Allusers from './Pages/AllUsers';
import CurrentUser from './Pages/CurrentUser';
import Login from './Pages/Login';


const store = createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <Provider store={store}>
    <Router>
      
      <Header/>
        <Routes>
          <Route exact path='/' element={<App/>}/>
          <Route path='/user' element={<CurrentUser/>}/>
          <Route path='/allUsers' element={<Allusers/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      
    </Router>
    </Provider>
  </React.StrictMode>
);

