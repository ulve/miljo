import React from "react";

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
        <td>{Object.keys(item)[0]}</td>
        <td>{item[Object.keys(item)[0]]}</td>
      </tr>
    );
  }
};

const renderList = list => (
  <table className="table is-hoverable is-striped is-fullwidth">
    <thead>
      <tr>
        <th>Inställning</th>
        <th>Värde</th>
      </tr>
    </thead>
    <tbody>
      {list.map(element => {
        return renderCell(element);
      })}
    </tbody>
  </table>
);

export default props => (
  <div className="card-content">{renderList(props.data)}</div>
);
