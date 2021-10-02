
import React, { Component } from 'react'
import ContainerItem from './ContainerItem';
import '../css/Container.css';

export default class Container extends Component {

    constructor (props) {
        super(props);

    }
    render() {
        return (
            <div>
                <div className="container">
                    <h2 className="title">
                    {this.props.title}
                    </h2>
                    <div className="containerList">
                        <ContainerItem nameSong ="Cà Phê Và Những Câu Chuyện" singerName=" tăng lê như phúc " />
                       
                    </div>

                </div>
                
            </div>    
            
        )
    }
}

