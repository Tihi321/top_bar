import React from 'react';
import TopBar from './components/TopBar.jsx';
import IframeContainer from './components/IframeContainer.jsx';

const App = (props) => {
  const {
    attributes,
    dataStore,
    selectedProject,
  } = props;

  return (
    <div className="container">
        <TopBar attributes={attributes} dataStore={dataStore} selectedProject={selectedProject} />
        <IframeContainer attributes={attributes} selectedProject={selectedProject} />
    </div>
  )
}

export default App;