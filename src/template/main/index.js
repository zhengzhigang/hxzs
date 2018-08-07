import React, { Component } from 'react';
import './main.css';
import { Carousel, Row, Col, Icon } from 'antd';

export default class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    render () {
        function a(value) {
            var a =  Object.prototype.toString.call(value);
            return a;
        }
        console.log(a(1))
        return (
            <div id="main" className="content">
                <Carousel autoplay>
                    <div><img style={{display:'block', width: '100%',  margin:'auto'}} src={require('../../images/banner-001.jpeg')}/></div>
                    <div><img style={{display:'block', width: '100%',  margin:'auto'}} src={require('../../images/banner-002.jpeg')}/></div>
                    <div><img style={{display:'block', width: '100%',  margin:'auto'}} src={require('../../images/banner-003.jpeg')}/></div>
                    <div><img style={{display:'block', width: '100%',  margin:'auto'}} src={require('../../images/banner-004.jpeg')}/></div>
                    <div><img style={{display:'block', width: '100%',  margin:'auto'}} src={require('../../images/banner-005.jpeg')}/></div>
                    <div><img style={{display:'block', width: '100%',  margin:'auto'}} src={require('../../images/banner-006.jpeg')}/></div>
                    <div><img style={{display:'block', width: '100%',  margin:'auto'}} src={require('../../images/banner-007.jpeg')}/></div>
                    <div><img style={{display:'block', width: '100%',  margin:'auto'}} src={require('../../images/banner-008.jpeg')}/></div>
                </Carousel>
                <div className="main-content">
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
                    <div className="img-block">
                        <Row>
                            <Col className="img-block-item" span={8}>
                                <h2 className="img-title">客厅</h2>
                                <p className="img-explain">客厅设计描述</p>
                                <div className="img-box">
                                    <img src={require('../../images/img-01.jpeg')} alt=""/>
                                </div>
                            </Col>
                            <Col className="img-block-item" span={8}>
                                <h2 className="img-title">厨房</h2>
                                <p className="img-explain">厨房设计描述</p>
                                <div className="img-box">
                                    <img src={require('../../images/img-01.jpeg')} alt=""/>
                                </div>
                            </Col>
                            <Col className="img-block-item" span={8}>
                                <h2 className="img-title">卧室</h2>
                                <p className="img-explain">卧室设计描述</p>
                                <div className="img-box">
                                    <img src={require('../../images/img-01.jpeg')} alt=""/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col span={24}>
                            <div className="main-block address-block">
                                <h2 className="block-title">联系我们</h2>
                                <p className="block-content">
                                    <Icon type="mobile" /> 联系电话：175 3807 6203
                                </p>
                                <p className="block-content">
                                    <Icon type="global" /> 公司地址：河南省周口市开元大道与工农路交叉口中邦国际建材城
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}