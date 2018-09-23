import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) => (
    <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
        <p className="menu-label is-hidden-touch">Miljöer</p>
        <ul className="menu-list">
            {
                props.data.map(m => 
                <li>
                    <a href={`#${m.miljö}`}>
                        <FontAwesomeIcon icon="server" /> {m.miljö}
                    </a>
                    <ul>
                        {
                            m.servrar.map(s => 
                                <li>
                                    <a href={`#${s}`}>
                                        <FontAwesomeIcon icon="hdd" /> {s}
                                    </a>
                                </li>)
                        }
                    </ul>
                </li>
            )}
        </ul>
    </aside>
);
