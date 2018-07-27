import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
    render () {
        return (
            <header className="header-wrapper">
                <nav className="nav clearfix">
                    <a href="/" className="logo">LOGO</a>
                    <ul className="nav-list clearfix" >
                        <li><a href="">首页</a></li>
                        <li><a href="">找灵感</a></li>
                        <li><a href="">找设计</a></li>
                        <li><a href="">软装搭配</a></li>
                        <li><a href="">算报价</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}