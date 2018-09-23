import React from "react";
const updown = expanded => {
  let a = "fas fa-angle-up";
  if (expanded) a = "fas fa-angle-down";

  return a;
};
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
          <i className={updown(props.expanded)} aria-hidden="true" />
        </span>
      </a>
    </header>
  );
};
