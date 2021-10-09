import React, { Component } from 'react'
import { BrowserRouter as Route, Switch}from "react-router-dom";
import Pageplaylistdetails from '../pages/Pageplaylistdetails';
import Pagehome from "../pages/pagehome"
import PageSong from "../pages/PageSong"
import PagePlaylist from "../pages/PagePlaylist"
import PageCollection from '../pages/PageCollection';
import PageProfileSinger from '../pages/PageProfileSinger';
import Listusers from '../User/listusers';


export default class RouterUrl extends Component {
    render() {
        return (
            <>  
                    <Switch>
                        <Route exact  path="/">
                            <Pagehome />
                        </Route>                            
                        <Route exact path="/bai-hat">
                            <PageSong />
                        </Route>
                        
                       
                       
                        <Route path="/Tuyen-tap">
                            <PageCollection />
                        </Route>
                        <Route exact path="/playlist">
                            <PagePlaylist />
                        </Route>
                        <Route path="playlist/:id" children={<Pageplaylistdetails />} />
                        <Route exact path="/singer" >
                             <PageProfileSinger /> 
                        </Route>
                        <Route exact path="/user" >
                             <Listusers /> 
                        </Route>
                      
                 
                
                    </Switch> 

                    

                
            </>
        )
    }
}
