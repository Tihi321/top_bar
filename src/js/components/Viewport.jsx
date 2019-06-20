import React, { Component } from 'react';

class Viewport extends Component {
    render() {
        return (
            <div className="screen-wrapper">
                <button onClick={this.handleOnClick.bind(this, "100%")} id="desktop" className="btn-vieport-size desktop" title="View Desktop Version">
                </button>
                <button onClick={this.handleOnClick.bind(this, "1024px")} id="tabletLand" className="btn-vieport-size tablet-land" title="View Tablet Landscape (1024x768)">
                </button>
                <button onClick={this.handleOnClick.bind(this, "768px")} id="tabletPort" className="btn-vieport-size tablet-port" title="View Tablet Portrait (768x1024)">
                </button>
                <button onClick={this.handleOnClick.bind(this, "480px")} id="mobLand" className="btn-vieport-size mob-land" title="View Mobile Landscape (480x320)">
                </button>
                <button onClick={this.handleOnClick.bind(this, "320px")}id="mobPort" className="btn-vieport-size mob-port" title="View Mobile Portrait (320x480)">
                </button>
            </div>
        )
    }
    handleOnClick(value){
        this.props.selectedWidth(value);
    }
}

export default Viewport;