import React from 'react';

const IframeContainer = (props) => {
  const {
    attributes: {
      selectedWidth,
      defaultWidth,
    },
    selectedProject,
  } = props;

  const style = {
    width: (selectedWidth == undefined) ? defaultWidth : selectedWidth
  }

  const url = selectedProject.link;
  return (
      <div id="iframeContainer" className="container-iframe" style={style}>
          <iframe id="iframe" src={url} frameBorder="0">
          </iframe>
      </div>
  )
}

export default IframeContainer;