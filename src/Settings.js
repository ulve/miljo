import React from "react";
import CardHeader from "./CardHeader.js"
import CardSettingsContent from "./CardSettingsContent.js"
export default props => (
  <section>
    <div className="card">
      <CardHeader title="Inställningar" expandable = {false} />
      <CardSettingsContent data={props.data} />
    </div>
  </section>
);
