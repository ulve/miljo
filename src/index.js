import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer, faHdd, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

library.add(faServer)
library.add(faHdd)
library.add(faAngleUp)
library.add(faAngleDown)


ReactDOM.render(<App />, document.getElementById('root'));
