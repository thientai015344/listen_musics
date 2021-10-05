import React, { Component } from 'react';
import SliderContent from '../component/fg/SliderContent';
import Container from '../component/fg/Container';
import Title from '../component/fg/Title';
import MediaItem from '../component/fg/mediaItem';


class Pagehome extends Component {
    render() {
        return (
            <div>
                < SliderContent />
                <Title title="Hôm Nay Nghe Gì" />
                <Container />
                <Title title="Bài Hát Mới" />
                <Container />
                <Title title="Bài Hát Mới" />
                <Container />
                <Title title="Bài Hát Mới" />
                <Container />
                <Title title="Bài Hát Mới" />
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

export default Pagehome;