import React from "react";

export default (props) => (
    <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
        <p className="menu-label is-hidden-touch">Miljöer</p>
        <ul className="menu-list">
            {
                props.data.map(m => 
                <li>
                    <a href={`#${m.miljö}`}>
                        <span className="icon"><i className="fa fa-server" /></span> {m.miljö}
                    </a>
                    <ul>
                        {
                            m.servrar.map(s => 
                                <li>
                                    <a href={`#${s}`}>
                                        <span className="icon is-small"><i className="fa fa-hdd" /></span> {s}
                                    </a>
                                </li>)
                        }
                    </ul>
                </li>
            )}
        </ul>
    </aside>
);
