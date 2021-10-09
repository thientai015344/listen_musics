import axios from 'axios';
import React, { Component } from 'react';

class Listusers extends Component {
    
            componentDidMount() {
                axios.get('https://reqres.in/api/users?page=2')
                .then(res => {
                    console.log('check res :', res)
    
    
                })
            }
    render() {

        return (
            <div>
                <h1>hello listUsers</h1>
                
            </div>
        );
    }
}

export default Listusers;