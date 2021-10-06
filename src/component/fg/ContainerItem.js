import React, { Component } from 'react'
import '../css/ContainerItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPause, faPlay} from '@fortawesome/free-solid-svg-icons'



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

        let {abc } = this.props
        console.log(' check props', this.props)

        return (
   
            <>
                        {
                            abc.map((item,index ) =>{
                                return (
                        <div key={item.id} className="music-item">
                    
                                        <div  className="music-picture">
                                            <a href="#" className="music-picture--link">
                                                <img className="music-picture--img" src={item.link} alt=""/>
                                            </a> 
                                            <div className="music-overlay">
                                                <button className="icon" onClick={() => this.changeiconButton()} >
                                                    {this.displaycheck()}
                                                </button>
                                            </div> 
                                    
                                            <div className="">
                                                <a href="#section" className="music_name">
                                                    {item.nameSong}
                                                </a>
                                                <a href="#section" className="singer-name">
                                                    {item.singerName}
                                                </a>
                                        </div>
                                    </div>
                  
                                 </div>
                                )

                            })


                        }
                    
            </>
        )
           
    }
       
   
}

