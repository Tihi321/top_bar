import React, { Component } from 'react';
import Logo from './Logo.jsx';
import Menu from './Menu.jsx';
import Viewport from './Viewport.jsx';

class TopBar extends Component {
    render() {
        const style_topbar = {
            backgroundColor: this.props.selectedProject.color
        }
        const ticker = (this.props.selectedProject.path === "") ? "👋👋👋 SIDE OTHER THE FROM HELLO 👋👋👋" : "";
        return (
            <div style={style_topbar} className="top-bar">
                <Logo />
                <div className="header-text">Menu</div>
                <Menu selectedProjectPath={this.props.selectedProject.path} projects={this.props.projects} />
                <Viewport selectedWidth={this.selectedWithInTopBar.bind(this)} />
                <div className="ticker"><p>{ticker}</p></div>
            </div>
        )
    }
    selectedWithInTopBar(selectedWithInTopBar) {
        this.props.selectedWithInTopBar(selectedWithInTopBar);
    }
}

export default TopBar;