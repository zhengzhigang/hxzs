import React, { Component } from 'react';
import './main.css';
import { Button, Carousel, Row, Col, BackTop } from 'antd';

export default class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    render () {
        return (
            <div id="main" className="content">
                <Carousel autoplay>
                    <div><img style={{display:'block', width: '100%',  margin:'auto'}} src={require('../../images/banner-01.jpeg')}/></div>
                    <div><img style={{display:'block', width: '100%',  margin:'auto'}} src={require('../../images/banner-02.jpeg')}/></div>
                    <div><img style={{display:'block', width: '100%',  margin:'auto'}} src={require('../../images/banner-03.jpeg')}/></div>
                    <div><img style={{display:'block', width: '100%',  margin:'auto'}} src={require('../../images/banner-04.jpeg')}/></div>
                    <div><img style={{display:'block', width: '100%',  margin:'auto'}} src={require('../../images/banner-05.jpeg')}/></div>
                    <div><img style={{display:'block', width: '100%',  margin:'auto'}} src={require('../../images/banner-06.jpeg')}/></div>
                    <div><img style={{display:'block', width: '100%',  margin:'auto'}} src={require('../../images/banner-07.jpeg')}/></div>
                    <div><img style={{display:'block', width: '100%',  margin:'auto'}} src={require('../../images/banner-08.jpeg')}/></div>
                </Carousel>
                <Row>
                    <Col span={24}>
                        <div className="main-block text-block">
                            <h2 className="block-title">公司简介</h2>
                            <p className="block-content">
                                周口鸿信装饰工程有限公司是一家集室内外设计、施工、材料于一体的专业化装饰公司。承接各种高中档家装、公寓、别墅，办公室、商铺、酒店、KTV等商业空间的设计与施工。公司从事装饰装修行业多年，有着创新的设计、合理的报价，还有一批专业化的施工队伍，确保施工绿色环保，安全高效。公司本着“设计源于生活，细节成就品质”的设计理念，凭借超前的设计构思，合理的预算报价，精良的施工工艺，优质的全程服务，真诚的服务每一位顾客。
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="main-block text-block">
                            <h2 className="block-title">经营理念</h2>
                            <p className="block-content">
                                自公司成立以来，全体员工一直秉承“以质量求生存，以信誉求发展”的经营理念，始终坚持以客户的需求和满意为核心，以“诚信”为宗旨，不断的用优质、精美、具有创造力的空间装饰产品为客户提供更大的价值回报，从而使公司不断发展壮大。
                            </p>
                        </div>
                    </Col>
                </Row>
                <div>
                    <Row>
                        <Col span={8}></Col>
                        <Col span={8}></Col>
                        <Col span={8}>
                            
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}