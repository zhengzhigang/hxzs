import React, { Component } from 'react';

function PcModal (props) {
    const wWidth = window.innerWidth;
        const wHeight = window.innerHeight;
        const styles = {
            fullScreen: {
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,.6)'
            },
            pcModal: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                padding: 20,
                transform: 'translate(-50%, -50%)',
                width: 561,
                height: 456,
                backgroundColor: '#fff',
                borderRadius: 6
            },
            close: {
                position: 'absolute',
                display: 'block',
                padding: '5px 2px',
                top: 7,
                right: 7,
                cursor: 'pointer'
            }
        }

        if (!props.show) {
            return null;
        }
        return (
            <div style={styles.fullScreen}>
                <div style={styles.pcModal}>
                    <div>{props.children}</div>
                    <span style={styles.close} onClick={props.close}>关闭</span>
                </div>
            </div>
        );
}

export default PcModal;