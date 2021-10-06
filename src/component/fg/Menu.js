import '../css/menu.css';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import Authen from './authen';
import { NavLink } from "react-router-dom";

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state ={
            status:0,

            display:true

        }

    }

    rendermodalogin =() => {
    
         <Authen />  
    }      
       

    renderButtonLogin =() =>(  
        <div className="user-loggin">
            <button  className=" btn-login ">Đăng nhập</button>
            <button  className=" btn-regitter ">Đăng ký</button>
        </div>          
    )   

renderUser =() =>(  
    <div className="use-user">
        <div className="user-picture">
            <FontAwesomeIcon icon ={faUser}  /> 
            <div className="user-logout">
                <ul>
                    <li className="item-proflie">
                    <NavLink to="#section" className="profile">Trang cá nhân</NavLink>
                    </li>
                    <li className="item-logout">
                    <NavLink to="#section" className="logout">Đăng Xuất</NavLink>
                    </li>
                </ul>
            </div>
        </div>  
    </div>                
)

displaycheck =() =>{
    if(this.state.status === 0){
        return this.renderButtonLogin();
        
    }
    else{

        return this.renderUser();
    }
}

changeiconButton =() =>{
    if(this.state.status === 0){
        
        this.setState({status: 1})
    }
    else{
        this.setState({status: 0})
    }
   
}


    
    render() {
        return (
            <div>
                <div className="allNavbar">
                   <div className=" Wrap navbar1">
                        <div className=" nav-logo ">
                            <NavLink className="navbar-logo" to="/">
                            <img src="./img/logo.png" alt="" className="img-logo" />
                            </NavLink>
                        </div>  
                        <div className="navbar-list-menu">
                            <ul id="nav-listMenu"> 
                            {/* ///////////////* song * / */}
                            <li className="navbar-li-song">
                                <NavLink activeClassName="active" className="nav-listMenu--Song " to="/bai-hat">
                                Bài hát                   
                                </NavLink>
                                <ul className=" subnav-song">
                                <li className="subnav-song--list-item">
                                    <ul style={{width: '130px'}} float="left" padding={0}>
                                    <li>
                                        <NavLink className=" blod-text Text-header" to="/viet-nam">
                                        Việt Nam</NavLink> 
                                    </li>
                                    <li><NavLink to="#section">
                                        Nhạc trẻ
                                        </NavLink> 
                                    </li>
                                    <li><NavLink to="#section">
                                        Trữ Tình
                                        </NavLink>
                                    </li>
                                    <li><NavLink to="#section">
                                        Remix Việt
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Rap Việt
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        tiền chiến
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Nhạc Trịnh 
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Rock Việt
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Cách mạng
                                        </NavLink></li>
                                    </ul>
                                    <ul style={{width: '130px'}} float="left">
                                    <li><NavLink className=" blod-text Text-header" to="#section">
                                        Âu Mĩ
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Pop
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Rock
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Dance
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        R&amp;b
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        jazz
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        CounTry
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        LaTin
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Indie
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Âu Mĩ Khác
                                        </NavLink></li>
                                    </ul>
                                    <ul style={{width: '130px'}} float="left">
                                    <li><NavLink className=" blod-text Text-header" to="#section">
                                        Châu Á
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Nhạc Hàn
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Nhạc Hoa
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Nhạc Nhật
                                        </NavLink></li>
                                    <li><NavLink to="#section">Nhạc Thái</NavLink></li>
                                    </ul>
                                    <ul style={{width: '130px'}} float="left">
                                    <li><NavLink className=" blod-text Text-header" to="#section">
                                        Khác
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Thiếu Nhi
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Không Lời
                                        </NavLink></li>
                                    <li><NavLink to="#section">Beat</NavLink></li>
                                    <li><NavLink to="#section">Thể loại Khác</NavLink></li>
                                    <li><NavLink to="#section">Tui hát</NavLink></li>
                                    </ul>
                                </li>               
                                </ul>
                            </li>
                            {/* /* ////////BXH/////////////////// */} 
                            <li className="navbar-li-charts">
                                <NavLink activeClassName="active" className="nav-listMenu--charts" to="/BXH">
                                BXH                  
                                </NavLink>  
                                <ul className="subnav-charts">
                                <li>
                                    <NavLink to="#section">Việt Nam</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#section">Âu Mỹ</NavLink></li>
                                <li>
                                    <NavLink to="#section">Hàn Quốc</NavLink></li>
                                </ul>
                            </li>
                            {/* collection */} 
                            <li className="navbar-li-collection">
                                <NavLink activeClassName="active" className="nav-listMenu--collection" to="/tuyen-tap">
                                Tuyển tập                  
                                </NavLink>
                                <ul className="subnav-collection">
                                <li className="subnav-collection--list-item">
                                    <ul style={{width: '130px'}} float="left" padding={0}>
                                    <li>
                                        <NavLink className=" blod-text Text-header" to="#section">
                                        Thể Loại</NavLink> 
                                    </li>
                                    <li><NavLink to="#section">
                                        Nhạc trẻ
                                        </NavLink> 
                                    </li>
                                    <li><NavLink to="#section">
                                        Trữ Tình
                                        </NavLink>
                                    </li>
                                    <li><NavLink to="#section">
                                        Pop
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Nhạc Hàn
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Nhạc hoa
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Soundtrack 
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Không lời
                                        </NavLink></li>
                                    </ul>
                                    <ul style={{width: '130px'}} float="left">
                                    <li><NavLink className=" blod-text Text-header" to="#section">
                                        Tâm Trạng
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Buồn
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Hưng phấn
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Nhạy Cảm
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Nhớ Nhung
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Thất tình
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Thư Giãn
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Vui vẻ
                                        </NavLink></li>
                                    </ul>
                                    <ul style={{width: '130px'}} float="left">
                                    <li><NavLink className=" blod-text Text-header" to="#section">
                                        Khung Cảnh
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Cafe
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Bar-Club
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Phong Trà
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Tập Gym     
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Lãng Mạn
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Mưa     
                                        </NavLink></li>
                                    </ul>
                                    <ul style={{width: '130px'}} float="left">
                                    <li><NavLink className=" blod-text Text-header" to="#section">
                                        Tình Yêu
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Top100
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Weekend
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Chill Out
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Bất Hủ     
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Song Ca
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Mashup     
                                        </NavLink></li>
                                    </ul>
                                </li>      
                                </ul>
                            </li>
                            {/* playlist */} 
                            <li className="navbar-li-playlist">
                                <NavLink activeClassName="active" className="nav-listMenu--playlist" to="/playlist">
                                playlist                  
                                </NavLink>
                                <ul className="subnav-playlist">
                                <li className="subnav-playlist--list-item">
                                    <ul style={{width: '130px'}} float="left">
                                    <li>
                                        <NavLink className=" blod-text Text-header" to="#section">
                                        Việt Nam</NavLink> 
                                    </li>
                                    <li><NavLink to="#section">
                                        Nhạc trẻ
                                        </NavLink> 
                                    </li>
                                    <li><NavLink to="#section">
                                        Trữ Tình
                                        </NavLink>
                                    </li>
                                    <li><NavLink to="#section">
                                        Remix Việt
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Rap Việt
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        tiền chiến
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Nhạc Trịnh 
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Rock Việt
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Cách mạng
                                        </NavLink></li>
                                    </ul>
                                    <ul style={{width: '130px'}} float="left">
                                    <li><NavLink className=" blod-text Text-header" to="#section">
                                        Âu Mĩ
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Pop
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Rock
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Dance
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        R&amp;b
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        jazz
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        CounTry
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        LaTin
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Indie
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Âu Mĩ Khác
                                        </NavLink></li>
                                    </ul>
                                    <ul style={{width: '130px'}} float="left">
                                    <li><NavLink className=" blod-text Text-header" to="#section">
                                        Châu Á
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Nhạc Hàn
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Nhạc Hoa
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Nhạc Nhật
                                        </NavLink></li>
                                    <li><NavLink to="#section">Nhạc Thái</NavLink></li>
                                    </ul>
                                    <ul style={{width: '130px'}} float="left">
                                    <li><NavLink className=" blod-text Text-header" to="#section">
                                        Khác
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Thiếu Nhi
                                        </NavLink></li>
                                    <li><NavLink to="#section">
                                        Không Lời
                                        </NavLink></li>
                                    <li><NavLink to="#section">Beat</NavLink></li>
                                    <li><NavLink to="#section">Thể loại Khác</NavLink></li>
                                    <li><NavLink to="#section">Tui hát</NavLink></li>
                                    </ul>
                                </li>   
                                </ul>
                            </li>
                            {/* artist */} 
                            <li activeClassName="active" className="navbar-li-artist">
                                <NavLink className="nav-listMenu--artist" to="/nghe-si">
                                Nghệ sĩ                 
                                </NavLink>   
                            </li>    
                            </ul>
                        </div>     
                        <div className="auto-right">
                            <div className="search">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                                <input type="text" className="search-input" placeholder="Tìm Kiếm" aria-label="Input group example" aria-describedby="basic-addon1" autoComplete="off" />
                            </div>
                            <div className="user-loggin">
                                <button  className=" btn-login ">Đăng nhập</button>
                                <button onClick={() =>this.rendermodalogin()} className=" btn-regitter">Đăng ký</button>
                             </div>    
                        </div>
                    </div>    
               
                </div>    
                
            </div>
        );
    }
}

export default Menu;

