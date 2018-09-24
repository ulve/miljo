import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default props => (
  <header className="card-header" id={props.title}>
    <p className="card-header-title">
      <FontAwesomeIcon icon="hdd" />
      <span>&nbsp;{props.title}</span>
    </p>
    <a
      href="#"
      className="card-header-icon"
      aria-label="more options"
      onClick={props.onClick}
    >
    { props.expandable &&
      <span className="icon">
        {props.expanded ? (
          <FontAwesomeIcon icon="angle-down" />
        ) : (
          <FontAwesomeIcon icon="angle-right" />
        )}
      </span>
    }
    </a>
  </header>
);
