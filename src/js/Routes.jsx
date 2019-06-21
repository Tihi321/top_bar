import React, { PureComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App.jsx';


class Routes extends PureComponent {
    constructor() {
        super();
        this.state = {
            projects: [],
            selectedWidth: undefined,
            defaultWidth: '100%',
            menuToggle: false,
        }

        this.bindRoutes = this.bindRoutes.bind(this);
        this.dataStore = this.dataStore.bind(this);
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

    dataStore({action, value}) {
      switch (action) {
        case 'setWidth':
          this.setState(() => {
            return {
              selectedWidth: value,
            };
          });
          break;
        case 'menuOpen':
          this.setState(() => {
            return {
              menuToggle: true,
            };
          });
          break;
        case 'menuClose':
            this.setState(() => {
              return {
                menuToggle: false,
              };
            });
          break;
      
        default:
          break;
      }
    }
    
    bindRoutes() {
      let items = [];
      if (this.state.projects.length >= 1) {
          items = this.state.projects.map((project, index) => {
              return (
                  <Route key={index} path={"/" + project.path} exact={true} render={
                      () => {
                          return (<App attributes={this.state} selectedProject={project} dataStore={this.dataStore} />);
                      }
                  } />
              );
          });
      }
      return items;
  }

  render() {
      let routes = this.bindRoutes();
      return (
          <BrowserRouter >
              <Switch>
                  {routes}
              </Switch>
          </BrowserRouter >
      )
  }
}


export default Routes;