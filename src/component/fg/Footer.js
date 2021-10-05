

import '../css/Footer.css'
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-All">
          <div className="footer1 Wrap">
            <div className="footer-conten--top">
                <div className="foooter-contentchillren">
                  <h5 className="Title-footer">
                  <img src="./img/logo.png" alt="" className="img-logo" />
                     </h5>
                  <p className="contentchillren">Giấy phép mạng xã hội: 3**/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 10/05/2021
                  </p>
                </div>
                <div className="foooter-about">
                    <h5 className="Title-footer">LIÊN HỆ</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a href="/">Dự Án</a>
                      </li>
                      <li>
                        <a href="/">Liên Hệ</a>
                      </li>
                      <li>
                        <a href="/">BLOG</a>
                      </li>
                      <li>
                        <a href="/">Giải Thưởng</a>
                      </li>
                    </ul>
                </div>
                <div className="foooter-addres">
                <h5 className="Title-footer">Địa Chỉ</h5>
                  <p>
                      <i className="fa fa-home" /> Hồ Chí Minh,  Việt Nam
                  </p>
                  <p>
                      <i className="fa fa-envelope" /> support@music.vn
                  </p>
                  <p>
                      <i className="fa fa-phone" /> + (028) 62576373
                  </p>
                  <p>
                      <i className="fa fa-print" /> + 028 38 48 58 68
                  </p>
                </div>
                <div className="foooter-folowus">
                <h5 className="Title-footer">THEO DÕI</h5>
                <div className="foooter-folowus--icon">
                <a href = "/" className="facebook">
                <i className="fab fa-facebook-f" />
                </a>
                <a href = "/" className="twitter">
                <i className="fab fa-twitter" />
                </a>
                <a href = "/" className="google">
                  <i className="fab fa-google-plus" />
                </a>
                <a href = "/" className="dribbble">
                  <i className="fab fa-dribbble" />
                </a>
                </div>
                </div>
            </div>
            <div className="footer-conten--bottom">
                <span className="coppyright">© 2020 Copyright: </span>
                <a className="coppyright-link">All rights reserved</a>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Footer;

