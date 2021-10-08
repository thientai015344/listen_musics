import React, { Component } from 'react'
import '../css/ContainerItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPause, faPlay} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";



export default class ContainerItem extends Component {
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
                            <NavLink to="/detail" className="music-picture--link">
                                <img className="music-picture--img" src={this.props.anh} alt=""/>
                            </NavLink> 
                            <div className="music-overlay">
                                <button className="icon" onClick={() => this.changeiconButton()} >
                                    {this.displaycheck()}
                                </button>
                            </div>
                    </div> 
                    
                    <div className="">
                        <NavLink to="/detail" className="music_name">
                            {this.props.nameSong}
                        </NavLink>
                        <NavLink to="#section" className="singer-name">
                            {this.props.singerName}
                        </NavLink>
                </div>
                   

                </div>
                
            </>
        )
           
    }
       
   
}

