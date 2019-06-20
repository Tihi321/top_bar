import React, { Component } from 'react';

class IframeContainer extends Component {
    render() {
        let style = {
            width: (this.props.selectedWidth == undefined) ? this.props.defaultOptions.width : this.props.selectedWidth
        }
        let url = this.props.selectedProject.link;
        return (
            <div id="iframeContainer" className="container-iframe" style={style}>
                <iframe id="iframe" src={url} frameBorder="0">
                </iframe>
            </div>
        )
    }
}

export default IframeContainer;