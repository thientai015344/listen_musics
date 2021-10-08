import React, { Component } from 'react';
import MediaItem from '../component/fg/mediaItem';
import '../component/css/pagedetail.css';

class Pagedetail extends Component {
    render() {
        return (
            <>
                <div className="Detail-background">
                    <div className="Detail Wrap">
                        <div className="Detail-position">
                            <div className="content-detail">
                                <div className="detail-img">
                                    <img src="./img/avata/hoangton.jpg" alt="" className="img-detail" />
                                </div>
                                <h2>Hoàng Tôn</h2>
                                <div className=""></div>
                            </div>
                        </div>
                        <div className="list-music--detail">
                        
                            <div className="title-list">
                                <p className="left">Bài Hát</p>
                                <p className="center">Thời Gian</p>
                                <p className="right">Mặc Định</p>    
                            </div>
                            
                            <div className="list-media-playlist">
                                <MediaItem />
                                <MediaItem />
                                <MediaItem />
                                <MediaItem />
                                <MediaItem />
                                <MediaItem />
                                <MediaItem />
                                <MediaItem />
                                <MediaItem />
                                <MediaItem />
                                <MediaItem />
                                <MediaItem />
                                <MediaItem />
                                <MediaItem />
                                <MediaItem />
                                <MediaItem />
                                <MediaItem />
                                <MediaItem />
                                <MediaItem />
                                <MediaItem />
                            </div>
                      
                        </div>
                    </div>
                    
                </div>
                
            </>
        );
    }
}

export default Pagedetail;