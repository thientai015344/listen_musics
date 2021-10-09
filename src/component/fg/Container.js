
import '../css/Container.css';
import React, { Component } from 'react'
import PlaylistItem from './playlistItem.js';
import Data from '../data/dataplaylist.json'


export default class Container extends Component {


    
    render() {


        return (

            <div>
                <div className="playlistItem">
                    
                    <div className="containerList">
                        
                        
                        {
                            
                            Data.map((value,key) => {
                                return (
                                <PlaylistItem key={key}
                                playlistId={value.id}
                                    anh={value.anh} 
                                    nameplaylist={value.nameplaylist}
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

