import React from 'react';
import logo from './images/logo.svg';
import htqlxh from './images/htqlxh.svg';

import { Link, useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  const onClickHandler = () => navigate(`/ressetpw`)
  return (
    <div className='bg'>
      <div className="Backgroundapp">
        <div>
          <div className='logo'>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className='myform'>
            <form>
              <div className='col1'>
                <p >Tên đăng nhập*</p>
                <input type="text" id="name" name='name'></input>
                <p >Mật khẩu*</p>
                <input type="password" id="password" name='password'></input>

                <div><Link to={'/ressetpw'}>Quên mật khẩu?</Link></div>
              </div>
              <div className='col2'>

                <button type='submit'>Đăng nhập</button>
              </div>
            </form>
          </div>
        </div>
        <div className='imagedangnhap'>
          <div className='hinh'>
            <img src={htqlxh} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
