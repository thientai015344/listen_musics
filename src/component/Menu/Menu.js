import React, { Component } from 'react';
import './menu.css';


class Menu extends Component {
    render() {
        return (
            <div>
                <div className="allNavbar">
                   <div className=" Wrap navbar1">
                        <div className=" nav-logo ">
                            <a className="navbar-logo" href="#section">
                            <img src="./img/logo.png" alt="" className="img-logo" />
                            </a>
                        </div>  
                        <div className="navbar-list-menu">
                            <ul id="nav-listMenu"> 
                            {/* ///////////////* song * / */}
                            <li className="navbar-li-song">
                                <a className="nav-listMenu--Song" href="#section">
                                Bài hát                   
                                </a>
                                <ul className=" subnav-song">
                                <li className="subnav-song--list-item">
                                    <ul style={{width: '130px'}} float="left" padding={0}>
                                    <li>
                                        <a className=" blod-text Text-header" href="#section">
                                        Việt Nam</a> 
                                    </li>
                                    <li><a href="#section">
                                        Nhạc trẻ
                                        </a> 
                                    </li>
                                    <li><a href="#section">
                                        Trữ Tình
                                        </a>
                                    </li>
                                    <li><a href="#section">
                                        Remix Việt
                                        </a></li>
                                    <li><a href="#section">
                                        Rap Việt
                                        </a></li>
                                    <li><a href="#section">
                                        tiền chiến
                                        </a></li>
                                    <li><a href="#section">
                                        Nhạc Trịnh 
                                        </a></li>
                                    <li><a href="#section">
                                        Rock Việt
                                        </a></li>
                                    <li><a href="#section">
                                        Cách mạng
                                        </a></li>
                                    </ul>
                                    <ul style={{width: '130px'}} float="left">
                                    <li><a className=" blod-text Text-header" href="#section">
                                        Âu Mĩ
                                        </a></li>
                                    <li><a href="#section">
                                        Pop
                                        </a></li>
                                    <li><a href="#section">
                                        Rock
                                        </a></li>
                                    <li><a href="#section">
                                        Dance
                                        </a></li>
                                    <li><a href="#section">
                                        R&amp;b
                                        </a></li>
                                    <li><a href="#section">
                                        jazz
                                        </a></li>
                                    <li><a href="#section">
                                        CounTry
                                        </a></li>
                                    <li><a href="#section">
                                        LaTin
                                        </a></li>
                                    <li><a href="#section">
                                        Indie
                                        </a></li>
                                    <li><a href="#section">
                                        Âu Mĩ Khác
                                        </a></li>
                                    </ul>
                                    <ul style={{width: '130px'}} float="left">
                                    <li><a className=" blod-text Text-header" href="#section">
                                        Châu Á
                                        </a></li>
                                    <li><a href="#section">
                                        Nhạc Hàn
                                        </a></li>
                                    <li><a href="#section">
                                        Nhạc Hoa
                                        </a></li>
                                    <li><a href="#section">
                                        Nhạc Nhật
                                        </a></li>
                                    <li><a href="#section">Nhạc Thái</a></li>
                                    </ul>
                                    <ul style={{width: '130px'}} float="left">
                                    <li><a className=" blod-text Text-header" href="#section">
                                        Khác
                                        </a></li>
                                    <li><a href="#section">
                                        Thiếu Nhi
                                        </a></li>
                                    <li><a href="#section">
                                        Không Lời
                                        </a></li>
                                    <li><a href="#section">Beat</a></li>
                                    <li><a href="#section">Thể loại Khác</a></li>
                                    <li><a href="#section">Tui hát</a></li>
                                    </ul>
                                </li>               
                                </ul>
                            </li>
                            {/* /* ////////BXH/////////////////// */} 
                            <li className="navbar-li-charts">
                                <a className="nav-listMenu--charts" href="#section">
                                BXH                  
                                </a>  
                                <ul className="subnav-charts">
                                <li>
                                    <a href="#section">Việt Nam</a>
                                </li>
                                <li>
                                    <a href="#section">Âu Mỹ</a></li>
                                <li>
                                    <a href="#section">Hàn Quốc</a></li>
                                </ul>
                            </li>
                            {/* collection */} 
                            <li className="navbar-li-collection">
                                <a className="nav-listMenu--collection" href="#section">
                                Tuyển tập                  
                                </a>
                                <ul className="subnav-collection">
                                <li className="subnav-collection--list-item">
                                    <ul style={{width: '130px'}} float="left" padding={0}>
                                    <li>
                                        <a className=" blod-text Text-header" href="#section">
                                        Thể Loại</a> 
                                    </li>
                                    <li><a href="#section">
                                        Nhạc trẻ
                                        </a> 
                                    </li>
                                    <li><a href="#section">
                                        Trữ Tình
                                        </a>
                                    </li>
                                    <li><a href="#section">
                                        Pop
                                        </a></li>
                                    <li><a href="#section">
                                        Nhạc Hàn
                                        </a></li>
                                    <li><a href="#section">
                                        Nhạc hoa
                                        </a></li>
                                    <li><a href="#section">
                                        Soundtrack 
                                        </a></li>
                                    <li><a href="#section">
                                        Không lời
                                        </a></li>
                                    </ul>
                                    <ul style={{width: '130px'}} float="left">
                                    <li><a className=" blod-text Text-header" href="#section">
                                        Tâm Trạng
                                        </a></li>
                                    <li><a href="#section">
                                        Buồn
                                        </a></li>
                                    <li><a href="#section">
                                        Hưng phấn
                                        </a></li>
                                    <li><a href="#section">
                                        Nhạy Cảm
                                        </a></li>
                                    <li><a href="#section">
                                        Nhớ Nhung
                                        </a></li>
                                    <li><a href="#section">
                                        Thất tình
                                        </a></li>
                                    <li><a href="#section">
                                        Thư Giãn
                                        </a></li>
                                    <li><a href="#section">
                                        Vui vẻ
                                        </a></li>
                                    </ul>
                                    <ul style={{width: '130px'}} float="left">
                                    <li><a className=" blod-text Text-header" href="#section">
                                        Khung Cảnh
                                        </a></li>
                                    <li><a href="#section">
                                        Cafe
                                        </a></li>
                                    <li><a href="#section">
                                        Bar-Club
                                        </a></li>
                                    <li><a href="#section">
                                        Phong Trà
                                        </a></li>
                                    <li><a href="#section">
                                        Tập Gym     
                                        </a></li>
                                    <li><a href="#section">
                                        Lãng Mạn
                                        </a></li>
                                    <li><a href="#section">
                                        Mưa     
                                        </a></li>
                                    </ul>
                                    <ul style={{width: '130px'}} float="left">
                                    <li><a className=" blod-text Text-header" href="#section">
                                        Tình Yêu
                                        </a></li>
                                    <li><a href="#section">
                                        Top100
                                        </a></li>
                                    <li><a href="#section">
                                        Weekend
                                        </a></li>
                                    <li><a href="#section">
                                        Chill Out
                                        </a></li>
                                    <li><a href="#section">
                                        Bất Hủ     
                                        </a></li>
                                    <li><a href="#section">
                                        Song Ca
                                        </a></li>
                                    <li><a href="#section">
                                        Mashup     
                                        </a></li>
                                    </ul>
                                </li>      
                                </ul>
                            </li>
                            {/* playlist */} 
                            <li className="navbar-li-playlist">
                                <a className="nav-listMenu--playlist" href="#section">
                                playlist                  
                                </a>
                                <ul className="subnav-playlist">
                                <li className="subnav-playlist--list-item">
                                    <ul style={{width: '130px'}} float="left">
                                    <li>
                                        <a className=" blod-text Text-header" href="#section">
                                        Việt Nam</a> 
                                    </li>
                                    <li><a href="#section">
                                        Nhạc trẻ
                                        </a> 
                                    </li>
                                    <li><a href="#section">
                                        Trữ Tình
                                        </a>
                                    </li>
                                    <li><a href="#section">
                                        Remix Việt
                                        </a></li>
                                    <li><a href="#section">
                                        Rap Việt
                                        </a></li>
                                    <li><a href="#section">
                                        tiền chiến
                                        </a></li>
                                    <li><a href="#section">
                                        Nhạc Trịnh 
                                        </a></li>
                                    <li><a href="#section">
                                        Rock Việt
                                        </a></li>
                                    <li><a href="#section">
                                        Cách mạng
                                        </a></li>
                                    </ul>
                                    <ul style={{width: '130px'}} float="left">
                                    <li><a className=" blod-text Text-header" href="#section">
                                        Âu Mĩ
                                        </a></li>
                                    <li><a href="#section">
                                        Pop
                                        </a></li>
                                    <li><a href="#section">
                                        Rock
                                        </a></li>
                                    <li><a href="#section">
                                        Dance
                                        </a></li>
                                    <li><a href="#section">
                                        R&amp;b
                                        </a></li>
                                    <li><a href="#section">
                                        jazz
                                        </a></li>
                                    <li><a href="#section">
                                        CounTry
                                        </a></li>
                                    <li><a href="#section">
                                        LaTin
                                        </a></li>
                                    <li><a href="#section">
                                        Indie
                                        </a></li>
                                    <li><a href="#section">
                                        Âu Mĩ Khác
                                        </a></li>
                                    </ul>
                                    <ul style={{width: '130px'}} float="left">
                                    <li><a className=" blod-text Text-header" href="#section">
                                        Châu Á
                                        </a></li>
                                    <li><a href="#section">
                                        Nhạc Hàn
                                        </a></li>
                                    <li><a href="#section">
                                        Nhạc Hoa
                                        </a></li>
                                    <li><a href="#section">
                                        Nhạc Nhật
                                        </a></li>
                                    <li><a href="#section">Nhạc Thái</a></li>
                                    </ul>
                                    <ul style={{width: '130px'}} float="left">
                                    <li><a className=" blod-text Text-header" href="#section">
                                        Khác
                                        </a></li>
                                    <li><a href="#section">
                                        Thiếu Nhi
                                        </a></li>
                                    <li><a href="#section">
                                        Không Lời
                                        </a></li>
                                    <li><a href="#section">Beat</a></li>
                                    <li><a href="#section">Thể loại Khác</a></li>
                                    <li><a href="#section">Tui hát</a></li>
                                    </ul>
                                </li>   
                                </ul>
                            </li>
                            {/* artist */} 
                            <li className="navbar-li-artist">
                                <a className="nav-listMenu--artist" href="#section">
                                Nghệ sĩ                 
                                </a>   
                            </li>    
                            </ul>
                        </div>     
                        <div className="search">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                            <input type="text" className="search-input" placeholder="Tìm Kiếm" aria-label="Input group example" aria-describedby="basic-addon1" autoComplete="off" />
                        </div>
                        <div className="user-loggin">
                            <button  className=" btn-login ">Đăng nhập</button>
                            <button  className=" btn-regitter ">Đăng ký</button>
                        </div>
                        </div> 
                </div>    
                
            </div>
        );
    }
}

export default Menu;