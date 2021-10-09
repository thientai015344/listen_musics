import React, { Component } from 'react'
import '../css/playlistItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPause, faPlay} from '@fortawesome/free-solid-svg-icons'








export default class PlaylistItem extends Component {
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
   
            <>
            
                <div key={this.props.id} className="music-item">

                    <div className="music-picture">
                            <div href ="/detail" className="music-picture--link">
                                <img className="music-picture--img" src={this.props.anh} alt=""/>
                            </div> 
                            <a href ={"/playlistdetails/" + this.props.nameplaylist + "." + this.props.playlistId + ".html"} className="music-overlay">
                                <button className="icon" onClick={() => this.changeiconButton()} >
                                    {this.displaycheck()}
                                </button>
                            </a>
                    </div> 
                    
                    <div className="contet-playlist">
                        <a href ={"/playlistdetails/" + this.props.nameplaylist + "." + this.props.playlistId + ".html"} className="music_name">
                            {this.props.nameplaylist}
                        </a>
                        <p   className="singer-name">
                            {this.props.singerName}
                        </p>
                </div>
                   

                </div>
                
            </>
        )
           
    }
       
   
}

