import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props => {
  console.log(props.expanded);
  return (
    <header className="card-header" id={props.title}>
      <p className="card-header-title">
        <span className="card-header-icon">
          <i className="fas fa-hdd" />
        </span>
        {props.title}
      </p>
      <a
        href="#"
        className="card-header-icon"
        aria-label="more options"
        onClick={props.onClick}
      >
        <span className="icon">
        {props.expanded ? <FontAwesomeIcon icon="angle-up" />
                        : <FontAwesomeIcon icon="angle-down" />}
            
        </span>
      </a>
    </header>
  );
};
