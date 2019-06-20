import React from 'react';
import {render} from 'react-dom';
import Routes from './routes.jsx';

class ReactApp {

    constructor() {
        render(
            <Routes />,
            document.getElementById('react-app')
        );
    }

}


export{
    ReactApp
}