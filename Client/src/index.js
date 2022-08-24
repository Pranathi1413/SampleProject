import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


import App from './App';
import Header from './Components/Header';
import ProfileCard from './Components/ProfileCard';
import Allusers from './Pages/AllUsers';
import CurrentUser from './Pages/CurrentUser';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<App/>}/>
        <Route path='/user' element={<CurrentUser/>}/>
        <Route path='allUsers' element={<Allusers/>}/>
      </Routes>      
    </Router>
    {/* <App /> */}
  </React.StrictMode>
);

