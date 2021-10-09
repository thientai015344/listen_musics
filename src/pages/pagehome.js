import React, { Component } from 'react';
import SliderContent from '../component/fg/SliderContent';
import Container from '../component/fg/Container';
import Title from '../component/fg/Title';
import MediaItem from '../component/fg/mediaItem';
import Data from '../component/data/datamusic.json'



class Pagehome extends Component {
    render() {
        return (
            <>
                < SliderContent />
                <Title title="Hôm Nay Nghe Gì" />
                <Container />       
                {
                    Data.map((value,key) => {
                        return (
                        <MediaItem key={key}
                        songId={value.id}
                            anh={value.anh} 
                            nameSong={value.nameSong}
                            duration={value.duration}
                            singerName={value.singerName}
                        />

                    )})
                }
        
            </>
        );
    }
}

export default Pagehome;