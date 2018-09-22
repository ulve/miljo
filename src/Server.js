import React from "react";

const renderSimple = (title, item) => (
  <div key={item}>
    <h2 className="subtitle">{title}</h2>
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
    <h2 className="subtitle">{title}</h2>
    <table className="table is-hoverable is-striped">
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

const header = name => (
  <header className="card-header">
    <p className="card-header-title">
      <span className="icon is-medium">
        <i className="fas fa-server" />
      </span>
      {name}
    </p>
  </header>
);

const content = data => <div className="card-content">{fofo(data)}</div>;

const card = data => (
  <div className="card">
    {header("nb11210")}
    {content(data)}
  </div>
);

export default props => <div>{card(props.data)}</div>;
