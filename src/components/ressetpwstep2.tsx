import React from 'react';
import logo from './images/logo.svg';
import ressetpw from './images/ressetpw.svg';

import { Link } from 'react-router-dom';


function RessetPWStep2() {
    return (
        <div className='bg'>
            <div className="Backgroundapp">
                <div>
                    <div className='logo'>
                        <img src={logo} />
                    </div>
                    <div className='myform'>
                        <form>
                            <div className='col2'>
                                <label >Đặt lại mật khẩu mới</label>
                                <div >

                                    <br />
                                    <p >Mật khẩu*</p>
                                    <input type="text" id="name" name='name'></input>
                                    <p >Nhập lại mật khẩu*</p>
                                    <input type="password" id="password" name='password'></input>

                                </div>
                                <br />
                                <br />
                                <div className='rowbtn'>

                                    <div>
                                        <Link to="/">
                                            <button type='submit'>Xác nhận</button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='imagedangnhap'>
                    <div className='hinh'>
                        <img src={ressetpw} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RessetPWStep2;
