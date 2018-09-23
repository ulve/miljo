import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default props => (
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
        {props.expanded ? (
          <FontAwesomeIcon icon="angle-down" />
        ) : (
          <FontAwesomeIcon icon="angle-right" />
        )}
      </span>
    </a>
  </header>
);
