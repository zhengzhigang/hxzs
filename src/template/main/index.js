import React, { Component } from 'react';
import './main.css';
import PcModal from '../components/modal/pcModal';

export default class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showModal: false
        }
    }
    openModal = () => {
        this.setState({
            showModal: true
        });
    }
    closeModal = () => {
        this.setState({
            showModal: false
        });
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
                <p onClick={this.openModal}>打开Modal</p>
                <PcModal show={this.state.showModal} close={this.closeModal}>
                    <div style={modalStyle.title}>这里是Modal的title</div>
                    <div style={modalStyle.content}>
                        
                    </div>
                </PcModal>
            </div>
        );
    }
}