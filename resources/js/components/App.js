import React from 'react'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppDirectories } from './AppDirectories';


const idElement = document.getElementById('App');

if (idElement) {
    ReactDOM.render(<AppDirectories />, idElement);
}

