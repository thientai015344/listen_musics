
import '../css/Container.css';
import React, { Component } from 'react'
import ContainerItem from './ContainerItem';
import Title from './Title';

export default class Container extends Component {

    constructor (props) {
        super(props);

    }
    render() {
        return (
            <div>
                <div className="container">
                    <Title />
                    <div className="containerList">
                        <ContainerItem nameSong ="Cà Phê Và Những Câu Chuyện" singerName=" tăng lê như phúc " />
                       
                    </div>

                </div>
                
            </div>    
            
        )
    }
}

