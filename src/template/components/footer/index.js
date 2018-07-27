import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
    render () {
        return (
            <footer className="footer">
                <div className="footer-list">
                    <a href="">关于我们</a>
                    <a href="">关于我们</a>
                    <a href="">关于我们</a>
                    <a href="">关于我们</a>
                    <a href="">关于我们</a>
                    <a href="">关于我们</a>
                </div>
                <div className="copyright">
                    Copyright © 2017-2018 dbahjsdgashjgfashj.
                </div>
                <div className="state">
                    免责声明：本网站图片由设计师自行上传，如权利人发现存在误传其作品情形，请及时与本站联系。
                </div>
            </footer>
        );
    }
}