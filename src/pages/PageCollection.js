import React, { Component } from 'react';
import MediaItem from '../component/fg/mediaItem';
import '../component/css/PageCollection.css'
import Title from '../component/fg/Title';

class PageCollection extends Component {
    render() {
        return (
            <div className="page-collection Wrap">
                <div className="pageCollection-img">
                    <img src="./img/bacgroundcollecttion.jpg" alt="background" className="img-page"/>
                </div>

                <Title title="Bài Hát Mới" />
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
        );
    }
}

export default PageCollection;