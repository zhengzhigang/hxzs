import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
    render () {
        return (
            <div className="header-wrapper">
                <div className="nav clearfix">
                    <a href="/" className="logo">LOGO</a>
                    <ul className="nav-list clearfix" >
                        <li><a href="">导航一</a></li>
                        <li><a href="">导航二</a></li>
                        <li><a href="">导航三</a></li>
                        <li><a href="">导航四</a></li>
                        <li><a href="">导航四</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}