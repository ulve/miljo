import React from "react";
import CardHeader from "./CardHeader.js";

const renderSimple = (title, item) => (
  <div key={item}>
  <br />
    <p className="subtitle has-text-centered">{title}</p>
    {item}{" "}
  </div>
);

const renderCell = item => {
  if (typeof item === "string" || typeof item === "number") {
    return (
      <tr key={item}>
        <td>{item}</td>
        <td />
      </tr>
    );
  }
  if (item instanceof Object && !(item instanceof Array)) {
    return (
      <tr key={Object.keys(item)[0]}>
        <td>{item[Object.keys(item)[0]]}</td>
        <td>{item[Object.keys(item)[1]]}</td>
      </tr>
    );
  }
};

const renderList = (title, list) => (
  <div key={title}>
  <br />
    <p className="subtitle has-text-centered">{title}</p>
    <table className="table is-hoverable is-striped is-fullwidth">
    <thead>
      <tr>
        <th>Info</th>
        <th>Kommentar</th>
      </tr>
      </thead>
      <tbody>
      {list.map(element => {
        return renderCell(element);
      })}
      </tbody>
    </table>
  </div>
);

const fofo = item => {
  if (typeof item === "string" || typeof item === "number") {
    return <span>{item}</span>;
  }

  return Object.keys(item).map(function(i, key) {
    if (item[i] instanceof Array) {
      return renderList(i, item[i]);
    } else if (item[i] instanceof Object && !(item[i] instanceof Array)) {
      return fofo(item[i]);
    } else {
      return renderSimple(i, item[i]);
    }
  });
};

const content = data => <div className="card-content">{fofo(data)}</div>;

const card = data => (
  <div className="card">
  <CardHeader title={data.server} />
    {content(data)}
  </div>
);

export default props => <section>{card(props.data)}</section>;
