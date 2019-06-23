import React from 'react';
import Logo from './Logo.jsx';
import Menu from './Menu.jsx';
import Viewport from './Viewport.jsx';

const TopBar = (props) => {
  const {
    selectedProject: {
      path,
      color,
    },
    selectedProject,
    attributes: {
      projects,
      menuToggle,
      logo,
      showMessage,
      message,
    },
    dataStore,
  } = props;

  const style_topbar = {
    backgroundColor: color,
  }
  const ticker = (message) ? message : '👋👋👋 SIDE OTHER THE FROM HELLO 👋👋👋';

  return (
      <div style={style_topbar} className="top-bar">
          <Logo
            logo={logo}
          />
          <div className="header-text">Menu</div>
          <Menu dataStore={dataStore} menuToggle={menuToggle} selectedProject={selectedProject} projects={projects} />
          <Viewport dataStore={dataStore} />
          {(showMessage && path === "") && <div className="ticker"><p>{ticker}</p></div>}
      </div>
  )
}

export default TopBar;