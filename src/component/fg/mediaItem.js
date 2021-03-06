import '../css/mediaItem.css';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faLink, faDownload, faPause, faPlay} from '@fortawesome/free-solid-svg-icons'



class MediaItem extends Component {
    constructor(props) {
        super(props)
        this.state ={
            status:0
        }

    }

    renderButtonPlay =() =>(  
            <FontAwesomeIcon icon ={faPause}  />           
    )

    renderButtonPause =() =>(  
            <FontAwesomeIcon icon ={faPlay}  />                
    )

    displaycheck =() =>{
        if(this.state.status === 0){
            
            return this.renderButtonPause();
        }
        else{
          
            return this.renderButtonPlay();
        }
    }

    changeiconButton =() =>{
        if(this.state.status === 0){
            
            this.setState({status: 1})
        }
        else{
            this.setState({status: 0})
        }
       
    }

   





    render() {
        return (
            <div key={this.props.id} className="Wrap width">
                <div className="list-item-media  ">
                <div className="media-overlay--background"></div> 
                    <div className="item-media">
                        <div className="media-left">
                            <div className="media-picture">
                                <img className="media-picture--img" src={this.props.anh}  alt=""/>
                                <div className="media-overlay">
                                    <button className="mediasong-icon" onClick={() => this.changeiconButton()} >
                                        {this.displaycheck()}
                                    </button>
                                </div> 
                            </div>                   
                            <div className="decription">
                                <div className="song-name">
                                 {this.props.nameSong}
                                </div>
                                <a href={"/singer/" + this.props.singerName + ".html"} className="singer-name">
                                    {this.props.singerName}
                                </a>
                            </div>

                        </div>
                        <div className="media-duration">
                        {this.props.duration}
                        </div>
                        <div className="media-right">
                            <div className="media-icon">
                                <button className="addplaylist" onClick={() => this.changeiconButton()} >
                                    <FontAwesomeIcon icon ={faHeart  } />
                                </button>
                                <button className="copylink" onClick={() => this.changeiconButton()} >
                                <FontAwesomeIcon icon ={faLink } />
                                </button>
                                <button className="dowload" onClick={() => this.changeiconButton()} >
                                <FontAwesomeIcon icon ={faDownload} />
                                </button>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        );
    }
}

export default MediaItem;