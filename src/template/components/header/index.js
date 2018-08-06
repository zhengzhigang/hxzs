import React, { Component } from 'react';
import {Affix} from 'antd';
import './header.css';

export default class Header extends Component {
    render () {
        return (
            <Affix offsetTop={0}>
                <header className="header-wrapper">
                    <nav className="nav clearfix">
                        <a href="/" className="logo">
                            <img src={require('../../../images/logo.jpeg')} style={{height: 50, verticalAlign: 'top', marginTop: 5}}/>
                        </a>
                        <ul className="nav-list clearfix" >
                            <li><a href="">首页</a></li>
                            <li><a href="">找灵感</a></li>
                            <li><a href="">找设计</a></li>
                            <li><a href="">软装搭配</a></li>
                            <li><a href="">算报价</a></li>
                        </ul>
                    </nav>
                </header>
            </Affix>
        );
    }
}