import React, { Component } from 'react';
import './main.css';
import { Button, Carousel } from 'antd';

export default class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    render () {
        const modalStyle = {
            title: {
                fontSize: 18,
                textAlign: 'center',
                marginBottom: 20
            },
            content: {

            }
        }
        return (
            <div id="main" className="content">
                <Carousel autoplay>
                    <div><img style={{display:'block', height:400, margin:'auto'}} src={require('../../images/baner-01.jpeg')}/></div>
                    <div><img style={{display:'block', height:400, margin:'auto'}} src={require('../../images/baner-02.jpeg')}/></div>
                    <div><img style={{display:'block', height:400, margin:'auto'}} src={require('../../images/baner-03.jpeg')}/></div>
                    <div><img style={{display:'block', height:400, margin:'auto'}} src={require('../../images/baner-04.jpeg')}/></div>
                    <div><img style={{display:'block', height:400, margin:'auto'}} src={require('../../images/baner-05.jpeg')}/></div>
                    <div><img style={{display:'block', height:400, margin:'auto'}} src={require('../../images/baner-06.jpeg')}/></div>
                    <div><img style={{display:'block', height:400, margin:'auto'}} src={require('../../images/baner-07.jpeg')}/></div>
                </Carousel>
                <Button type="primary">button</Button>
            </div>
        );
    }
}