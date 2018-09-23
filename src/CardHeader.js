import React from "react";

export default props => (
  <header className="card-header" id={props.title}>
    <p className="card-header-title">
      <span className="card-header-icon">
        <i className="fas fa-hdd" />
      </span>
      {props.title}
    </p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true" />
      </span>
    </a>
  </header>
);
