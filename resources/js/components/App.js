import React from 'react'
import ReactDOM from 'react-dom';

import { AppTest } from './AppTest';

const idElement = document.getElementById('App');

if (idElement) {
    ReactDOM.render(<AppTest />, idElement);
}

