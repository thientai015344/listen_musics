import React, { Component } from 'react';
import '../component/css/pageSong.css';
import MediaItem from '../component/fg/mediaItem';
import Title from '../component/fg/Title';



class PageSong extends Component {
    render() {
        return (
            <>

               <div className="Marding-60">
                <Title title=" Bài Hát"  />
                <MediaItem />

               </div>

          
            

            </>
        );
    }
}

export default PageSong;