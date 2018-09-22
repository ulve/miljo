import React from "react";

export default () => (
  
      <aside>
        <p className="menu-label is-hidden-touch">Navigation</p>
        <ul className="menu-list">
          <li>
            <a href="#" className="">
              <span className="icon">
                <i className="fa fa-home" />
              </span>{" "}
              Home
            </a>
          </li>
          <li>
            <a href="#" className="is-active">
              <span className="icon">
                <i className="fa fa-table" />
              </span>{" "}
              Links
            </a>

            <ul>
              <li>
                <a href="#">
                  <span className="icon is-small">
                    <i className="fa fa-link" />
                  </span>{" "}
                  Link1
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon is-small">
                    <i className="fa fa-link" />
                  </span>{" "}
                  Link2
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="">
              <span className="icon">
                <i className="fa fa-info" />
              </span>{" "}
              About
            </a>
          </li>
        </ul>
      </aside>
);
