import React, { Component } from 'react';
import '../component/css/pageSong.css';
import Container from '../component/fg/Container';
import Title from '../component/fg/Title';
import {  BrowserRouter as Route, Switch, Link } from "react-router-dom";

class PageSong extends Component {
    render() {
        return (
            <>
                <div className="box_listmenu Wrap" >                              
                <ul className="cssmenu">
    
                        <li className="listvn"><h3><Link to="/bai-hat/viet-nam" rel="dofollow" title="Việt Nam">Việt Nam</Link></h3></li>
                        <li><Link pr="list_vn" to="#/" rel="dofollow" title=" Trẻ" className="red_nhactre"> Trẻ</Link></li>
                        <li><Link pr="list_vn" to="#/" rel="dofollow" title="Trữ Tình">Trữ Tình</Link></li>
                        <li><Link pr="list_vn" to="#/" rel="dofollow" title="Remix Việt">Remix Việt</Link></li>
                        <li><Link pr="list_vn" to="#/" rel="dofollow" title="Rap Việt">Rap Việt</Link></li>
                        <li><Link pr="list_vn" to="#/" rel="dofollow" title="Tiền Chiến">Tiền Chiến</Link></li>
                        <li><Link pr="list_vn" to="#/" rel="dofollow" title=" Nhạc Trịnh"> Nhạc Trịnh</Link></li>
                        <li><Link pr="list_vn" to="#/" rel="dofollow" title="Rock Việt">Rock Việt</Link></li>
                        <li><Link pr="list_vn" to="#/" rel="dofollow" title="Cách Mạng">Cách Mạng</Link></li>   
                                                            
                        
                         <li className="line"></li>
                        <li className="listvn"><h3><Link rel="dofollow" title="ÂU Mĩ">ÂU Mĩ</Link></h3></li>
                        <li> <Link pr="list_aumy" to="#/" rel="dofollow" title="Pop">Pop</Link></li>
                        <li> <Link pr="list_aumy" to="#/" rel="dofollow" title="Rock">Rock</Link></li>
                        <li> <Link pr="list_aumy" to="#/" rel="dofollow" title="Electronica/Dance">Electronica/Dance</Link></li>
                        <li> <Link pr="list_aumy" to="#/" rel="dofollow" title="R&amp;B/Hip Hop/Rap">R&amp;B/Hip Hop/Rap</Link></li>
                        <li> <Link pr="list_aumy" to="#/" rel="dofollow" title="Blues/Jazz">Blues/Jazz</Link></li>
                        <li> <Link pr="list_aumy" to="#/" rel="dofollow" title="Country">Country</Link></li>
                        <li> <Link pr="list_aumy" to="#/" rel="dofollow" title="Latin">Latin</Link></li>
                        <li className="view_more_list">
                            <div className="dot_more"><span className="dot_cricle"></span><span className="dot_cricle"></span><span className="dot_cricle"></span> <span id="listchild_aumy">Xem thêm</span></div>
                            <ul>
                                <li> <Link pr="listchild_aumy" to="#/" rel="dofollow" title="Indie">Indie</Link></li>
                                <li> <Link pr="listchild_aumy" to="#/" rel="dofollow" title="Âu Mĩ khác">Âu Mĩ khác</Link></li>
                            </ul>
                        </li>   
                        
                        <li className="line"></li>
                        <li className="listvn" style={{height: '34px'}}><h3><Link rel="dofollow" title="CHÂU Á">CHÂU Á</Link></h3></li>
                        <li> <Link pr="list_chaua" to="#/" rel="dofollow" title="Nhạc Hàn"> Nhạc Hàn</Link></li>
                        <li> <Link pr="list_chaua" to="#/" rel="dofollow" title="Nhạc Hoa">Nhạc Hoa</Link></li>
                        <li> <Link pr="list_chaua" to="#/" rel="dofollow" title="Nhạc Nhật">Nhạc Nhật</Link></li>
                        <li> <Link pr="list_chaua" to="#/" rel="dofollow" title="Nhạc Thái">Nhạc Thái</Link></li>
                        
                        <li className="line"></li>   
                        <li className="listvn" style={{height: '34px'}}><h3><Link rel="dofollow" title="KHÁC">KHÁC</Link></h3></li>
                        <li> <Link pr="list_khac" to="#/" rel="dofollow" title="Thiếu Nhi">Thiếu Nhi</Link></li>
                        <li> <Link pr="list_khac" to="#/" rel="dofollow" title="Không Lời">Không Lời</Link></li>
                        <li> <Link pr="list_khac" to="#/" rel="dofollow" title=" Phim"> Phim</Link></li>
                        <li> <Link pr="list_khac" to="#/" rel="dofollow" title="Thể Loại Khác">Thể Loại Khác</Link></li>                            
                </ul>

                <Switch>
                <Route exact path="/bai-hat/">
                        <Title title="Bài bai Mới" />
                        <Container />
                        <Title title="Bài nnn Mới" />
                        <Container />
                    </Route>
                <Route exact path="/bai-hat/viet-nam">
                    <Title title="Bài Hát " />
                    <Container />
                    <Title title="Bài Hát " />
                    <Container />
                    <Title title="Bài  Mới" />
                    <Container />
                    <Title title="Hát Mới" />
                    <Container />
                  
                </Route>  

                </Switch>

          
            </div>

            </>
        );
    }
}

export default PageSong;