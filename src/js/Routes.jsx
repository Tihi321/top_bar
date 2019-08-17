import React, { PureComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App.jsx';


class Routes extends PureComponent {
    constructor() {
        super();
        this.state = {
          logo: {
            id: -1,
            url: '',
            title: '',
          },
          showMessage: false,
          message: '',
            projects: [],
            selectedWidth: undefined,
            defaultWidth: '100%',
            menuToggle: false,
        }

        this.bindRoutes = this.bindRoutes.bind(this);
        this.dataStore = this.dataStore.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.fetchDataJson = this.fetchDataJson.bind(this);
    }

    fetchData() {
      const fetchUrl = 'https://blog.tihomir-selak.from.hr/index.php?rest_route=/portfolio-backend/v1/portfolio-topbar';
      fetch(fetchUrl)
        .then(res => res.json())
        .then((result) => {
          const {
            generalOptions: {
              logo,
              message,
              showMessage,
            },
            projectsOptions: {
              projects,
            },
          } = result;
      
          const showMessageValue = (showMessage === '1') || false;

          const projectsArr = (projects) ? JSON.parse(projects) : [{
            title: '',
            path: '',
            color: '',
            link: '',
          }];

          this.setState(() => {
            return {
              is_loaded: true,
              showMessage: showMessageValue,
              message,
              logo: JSON.parse(logo),
              projects: projectsArr,
            };
          });
        },
        // Note: it's important to handle errors here instead of a catch() block so that
        // we don't swallow exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          this.fetchDataJson();
        })
    }

    // backup if enpoint dont work
    fetchDataJson() {
      const fetchJson = './assets/data/projects.json"';
      fetch(fetchJson)
      .then(res => res.json())
      .then((result) => {

        this.setState(() => {
          return {
            is_loaded: true,
            projects: result,
          };
        });
      },
      // Note: it's important to handle errors here instead of a catch() block so that
      // we don't swallow exceptions from actual bugs in components.
      (error) => {
        this.setState(() => {
          return {
            is_loaded: true,
            error,
          };
        });
      })
    }

    componentDidMount() {
      this.fetchData();
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