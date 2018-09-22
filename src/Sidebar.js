import React from "react";

export default (props) => (
    <aside className="column is-3 is-narrow-mobile is-fullheight section is-hidden-mobile">
        <p className="menu-label is-hidden-touch">Miljöer</p>
        <ul className="menu-list">
            {
                props.data.map(m => 
                <li>
                    <a href="#">
                        <span className="icon"><i className="fa fa-server" /></span> {m.miljö}
                    </a>
                    <ul>
                        {
                            m.servrar.map(s => 
                                <li>
                                    <a href="#">
                                        <span className="icon is-small"><i className="fa fa-server" /></span> {s}
                                    </a>
                                </li>)
                        }
                    </ul>
                </li>
            )}
        </ul>
    </aside>
);
