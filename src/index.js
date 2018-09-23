import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer, faHdd, faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faServer)
library.add(faHdd)
library.add(faAngleRight)
library.add(faAngleDown)

ReactDOM.render(<App />, document.getElementById('root'));
