import React  from 'react';
import './ContainerItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPause, faPlay} from '@fortawesome/free-solid-svg-icons'
import song_card from "./";


const  ContainerItem = ()=> {
    console.log(song_card);
   
    <div>
        <div className="music-item">
            <div className="music-picture">
                <a href="#" className="music-picture--link">
                    <img className="music-picture--img" src="./img/musicPicture/musicPicture_1.png" alt=""/>
                </a> 
                <div className="music-overlay">
                    <button className="icon" onClick={() => this.props.setIsPlaying(!this.props.isPlaying)}>
                        <FontAwesomeIcon icon ={this.props.isPlaying ? faPause : faPlay}  />
                    </button>
                </div>
            </div>
            <div className="">
                <a href="#section" className="music_name">
                    {this.props.nameSong}
                </a>
                <a href="#section" className="singer-name">
                    {this.props.singerName}
                </a>
            </div>
        </div>
            
    </div>
       
   
}

export default ContainerItem;