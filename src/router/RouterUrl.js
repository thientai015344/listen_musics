import React, { Component } from 'react'
import {BrowserRouter as Route, Switch}from "react-router-dom";
import Pagedetail from '../pages/Pagedetail';
import Pagehome from "../pages/pagehome"
import PageProfile from '../pages/PageProfile';
import PageSong from "../pages/PageSong"
import PreviousHomepage from "../pages/previousHomepage"

export default class RouterUrl extends Component {
    render() {
        return (
            <>
                    <Switch>
                        <Route exact  path="/">
                            <Pagehome />
                        </Route>  
                        <Route path="/detail">
                            <Pagedetail />
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
                        </Route>*/}

                        <Route path="/Nghe-si">
                            <PageProfile />
                        </Route>  
                    
                
                </Switch> 
                
            </>
        )
    }
}
