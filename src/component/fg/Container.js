
import '../css/Container.css';
import React, { Component } from 'react'
import ContainerItem from './ContainerItem.js';


export default class Container extends Component {

    constructor (props) {
        super(props);
        this.state = {
            list1: [
                {id: 'song1',link:'../img/song/img-song/yeumratnhieu.jpg' , nameSong:'ngày mưa' , singerName:'lam chan khang'},
                {id: 'song2',link:'../img/song/img-song/yeumratnhieu.jpg' , nameSong:'ngày nắng' , singerName:'bang bang'},
                {id: 'song3',link:'../img/song/img-song/yeumratnhieu.jpg' , nameSong:'ngày mưa' , singerName:'lam chan khang'},
                {id: 'song4',link:'../img/song/img-song/yeumratnhieu.jpg' , nameSong:'ngày giong' , singerName:'chi dan'},
                {id: 'song5',link:'../img/song/img-song/yeumratnhieu.jpg' , nameSong:'ngày am u' , singerName:'chau khai khai'},
                {id: 'song6',link:'' , nameSong:'vi em' , singerName:'bang kieu'},
            ],
            list2: [
                {id: 'song1',link:'' , nameSong:'xin em' , singerName:'Bùi anh Tuấn'},
                {id: 'song2',link:'' , nameSong:'hẹn một mai' , singerName:'Chi Đan'},
                {id: 'song3',link:'' , nameSong:'Đã Từng' , singerName:'Bùi anh Tuấn'},
                {id: 'song4',link:'' , nameSong:'Lặng Yên' , singerName:'chi dan'},
                {id: 'song5',link:'' , nameSong:'Phố không mùa' , singerName:'chau khai phong'}
            ],
            list3: [
                {id: 'song1',link:'' , nameSong:'Chỉ còn lại tình yêu' , singerName:'lam chan khang'},
                {id: 'song2',link:'' , nameSong:'Không phair em đúng không' , singerName:'Chi Đan'},
                {id: 'song3',link:'' , nameSong:'nguyoi duy nhat' , singerName:'bang kieu'},
                {id: 'song4',link:'' , nameSong:'chi a giat mo' , singerName:'chi dan'},
                {id: 'song5',link:'' , nameSong:'tưng vi nhau' , singerName:'chau khai phong'}
            ],
            list4: [
                {id: 'song1',link:'' , nameSong:'vi em' , singerName:'bang kieu'},
                {id: 'song2',link:'' , nameSong:'vì yêu' , singerName:'Chi Đan'},
                {id: 'song3',link:'' , nameSong:'Để em rời xa' , singerName:'lam chan khang'},
                {id: 'song4',link:'' , nameSong:'Dành cho em' , singerName:'chi dan'},
                {id: 'song5',link:'' , nameSong:'Yêu em rất nhiều' , singerName:'chau khai khai'}
            ],
            list5:[
                {id: 'song1',link:'../img/song/img-song/yeumratnhieu.jpg' , nameSong:'vi em' , singerName:'bang kieu'},
            ],

            list6:[
                {id: 'song2',link:'../img/song/img-song/yeumratnhieu.jpg' , nameSong:'vì yêu' , singerName:'Chi Đan'},
            ],
            list7:[
                {id: 'song3',link:'../img/song/img-song/yeumratnhieu.jpg' , nameSong:'Để em rời xa' , singerName:'lam chan khang'},
            ],
            list8: [
               
                {id: 'song4',link:'../img/song/img-song/yeumratnhieu.jpg' , nameSong:'Dành cho em' , singerName:'chi dan'},
            ],
            list9:[
                {id: 'song5',link:'../img/song/img-song/yeumratnhieu.jpg' , nameSong:'Yêu em rất nhiều' , singerName:'chau khai khai'},
            ],
            list10:[
                {id: 'song2',link:'../img/song/img-song/yeumratnhieu.jpg' , nameSong:'vì yêu' , singerName:'Chi Đan'},
            ],


               
        
                
             
        }



    }
    render() {
        return (
            <div>
                <div className="containerItem">
                    
                    <div className="containerList">
                        <ContainerItem abc={this.state.list5}/>
                        <ContainerItem abc={this.state.list6}/>
                        <ContainerItem abc={this.state.list7}/>
                        <ContainerItem abc={this.state.list8}/>
                        <ContainerItem abc={this.state.list9}/>
                        
                    </div>

                </div>
                
            </div>    
            
        )
    }
}

