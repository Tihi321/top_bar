import React, {Component} from 'react';
import TopBar from './components/TopBar.jsx';
import IframeContainer from './components/IframeContainer.jsx';

class App extends Component {
    constructor() {
        super();
        this.state = {
            selectedWidth: undefined
        }
    }
    render() {
        return (
            <div className="container">
                <TopBar selectedProject={this.props.selectedProject} projects={this.props.projects} selectedWithInTopBar={this.selectedWithInApp.bind(this)} />
                <IframeContainer selectedWidth={this.state.selectedWidth} selectedProject={this.props.selectedProject} defaultOptions={this.props.delaultOptions} />
            </div>
        )
    }

    selectedWithInApp(selectedWithInApp) {
        this.setState({ selectedWidth: selectedWithInApp });
    }
}

// Specifies the default values for props:
App.defaultProps = {
    delaultOptions: {
        width: '100%'
    }
};

export default App;