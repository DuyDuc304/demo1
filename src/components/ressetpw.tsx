import React from 'react';
import logo from './images/logo.svg';
import ressetpw from './images/ressetpw.svg';
import { Link } from 'react-router-dom';


function RessetPW() {
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
                                <div className='duck'>
                                    <label>Đặt lại mật khẩu</label>
                                    <br />
                                    <p >Vui lòng nhâp email để lấy lại mật khẩu của bạn*</p>
                                    <input type="email" id="email" name='email' ></input>
                                </div>
                                <br />
                                <br />
                                <div className='rowbtn'>
                                    <div >
                                        <Link className='buttonhuy' to="/" >
                                            <button >Hủy
                                            </button >
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/ressetpwstep2">
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

export default RessetPW;
