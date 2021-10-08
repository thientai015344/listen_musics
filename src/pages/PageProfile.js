import React, { Component } from 'react';
import Profilesinger from '../component/fg/profilesinger';
import Container from '../component/fg/Container';
import Title from '../component/fg/Title';

class PageProfile extends Component {
    render() {
        return (
            <div>
                    <Profilesinger />
                    <Title title="Hôm Nay Nghe Gì" />
                    <Container />
                    <Title title="Bài Hát Mới" />
                    <Container />
                    <Title title="Bài Hát Mới" />
                    <Container />
                    <Title title="Bài Hát Mới" />
                    <Container />
                
            </div>
        );
    }
}

export default PageProfile;