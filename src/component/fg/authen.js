import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faGoogle, faApple} from '@fortawesome/free-brands-svg-icons'
import '../css/authen.css'


   

export default class Authen extends Component {
    render() {
        return (
            <div>
                <div className="modal1">
                    <div className="container ">
                        <div className="background--img"  >
                        <img src="./img/backgroud.gif"alt=""  />
                        <form>
                        <div className="form-login "> 
                            <div className="pading30">
                                <div className="form-login-header">
                                    <p className="form-login_title">
                                        Đăng Ký
                                    </p>
                                </div>
                                <div className="form-login-container">
                                    <div className="login-input">
                                        <input type="text" placeholder="Tên tài khoản" className="input-login name"/>
                                        <input type="password" placeholder="mật khẩu" className="input-login password"/>
                                        <input type="password" placeholder="Nhập lại mật khẩu" className="input-login replace password"/>
                                        <input type="text" placeholder="Số điện thoại" className="input-login phonenumber"/>

                                    </div>
                                    <div className="attentionn">
                                            <input className="check-all" defaultChecked ="checked" type="checkbox"/>
                                            <div className="DK">
                                                <label>tôi đã đọc và đồng ý các   </label>   
                                                <a href="/">điều khoản và điều kiện</a>
                                            </div>
                                        </div>
                                    <button className="button-login">Đăng ký</button>
                                    <div className="form-login-container-line">
                                        <div className="line"></div>
                                        <div className="or">HOẶC</div>
                                        <div className="line"></div>
                                    </div>
                                    <div className="form-login-container-loginWith">
                                        <button className="facebook height-button">
                                            <div className="icon-icon ">
                                                <FontAwesomeIcon icon ={faFacebook}  /> 
                                            </div>
                                            <p className="name-facebook">Facebook</p>  
                                        </button>
                                        <button className="google height-button">
                                            <div className="icon-icon2 ">
                                            <FontAwesomeIcon icon ={faGoogle}  /> 
                                            </div>
                                            <p className="name-google">Google</p>
                                        </button>
                                        <button className="apple height-button">
                                            <div className="icon-icon" >
                                             <FontAwesomeIcon icon ={faApple}  /> 
                                            </div>
                                            <p className="name-apple">Apple</p>
                                        </button>
                                    </div>
                                    <div className="form-login-container--attention">
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="form-logi-footer">
                                <div className="form-logi-footer-title">
                                    Bạn đã có tài khoản?
                                </div>
                                <a href="" className="login">Đăng nhập</a>
                            </div>
                        </div>


                    </form>

                </div>
            </div>
                
                </div>
            </div>
        )
    }
}




  