
import '../css/Container.css';
import React, { Component } from 'react'
import ContainerItem from './ContainerItem.js';
import Data from '../data/datasong.json'


export default class Container extends Component {


    
    render() {


        return (

            <div>
                <div className="containerItem">
                    
                    <div className="containerList">
                        
                        
                        {
                            
                            Data.map((value,key) => {
                                return (
                                <ContainerItem key={key}
                                    anh={value.anh} 
                                    nameSong={value.nameSong}
                                    singerName={value.singerName}
                                />

                            )
                            })
                        }
                        
                        
                    </div>

                </div>
                
            </div>    
            
        )
    }
}

