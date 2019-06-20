import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import App from './App.jsx';


class Routes extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        fetch("./assets/data/projects.json")
            .then(res => res.json())
            .then((result) => {
                this.setState({ is_loaded: true, projects: result });
            },
                // Note: it's important to handle errors here instead of a catch() block so that
                // we don't swallow exceptions from actual bugs in components.
                (error) => {
                    this.setState({ is_loaded: true, error });
                })
    }
    render() {
        let routes = this.bindRoutes(this);
        return (
            <BrowserRouter >
                <Switch>
                    {routes}
                </Switch>
            </BrowserRouter >
        )
    }
    bindRoutes() {
        let items = [];
        if (this.state.projects.length >= 1) {
            items = this.state.projects.map((project, index) => {
                return (
                    <Route key={index} path={"/" + project.path} exact={true} render={
                        () => {
                            return (<App projects={this.state.projects} selectedProject={project} />);
                        }
                    } />
                );
            });
        }
        return items;
    }
}


export default Routes;