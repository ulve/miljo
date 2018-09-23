import React from "react";

export default props => (
  <section>
    <div className="card">
      <CardHeader title="Inställningar" />
      <CardSettingsContent data={props.data} />
    </div>
  </section>
);
