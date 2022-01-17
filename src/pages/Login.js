import { Link } from 'react-router-dom';
import './Login.css';
import { AutoComplete } from 'antd';
import { useState } from 'react';
import Searchbar from '../pages/components/Searchbar';

const Login = () => {
  return (
    <div className="Login">
        <div className="searchbar">
          <Searchbar/>
        </div>
    </div>
  )
}



export default Login;
