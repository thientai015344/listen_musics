import React, { Component } from 'react'
import {BrowserRouter as Route, Switch}from "react-router-dom";
  import Pagehome from "../pages/pagehome"
  import PageSong from "../pages/PageSong"
  import PreviousHomepage from "../pages/previousHomepage"





  


export default class RouterUrl extends Component {
    render() {
        return (
            <div>
           <Switch>
                <Route  path="/">
                    <Pagehome />
                </Route>    
                            
                <Route path="/bai-hat">
                    <PageSong />
                </Route>
           
                        
                     <Route path="/BXH">
                        <PreviousHomepage />
                    </Route>
                    {/*<Route path="/Tuyen-tap">
                        <PageColletion />
                    </Route>
                    <Route path="/playList">
                        <PagePlaylist />
                    </Route>
                    <Route path="/Nghe-si">
                        <PageSinger />
                    </Route>  */}
                   
               
            </Switch> 
                
            </div>
        )
    }
}
