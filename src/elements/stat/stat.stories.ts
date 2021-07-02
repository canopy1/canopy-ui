import { html } from "lit";
import "./stat";

export default {
  title: "Elements/Stat",
};

export const Default = () => html`
  <div style="display: flex;">
    <cui-stat
      label="Large Stat"
      value="$987.65"
      size="large"
      style="margin: 0 32px;">
    </cui-stat>
  
    <cui-stat
      label="Default Stat"
      value="$987.65"
      style="margin: 0 32px;">
    </cui-stat>

    <cui-stat
      label="Small Stat"
      value="$987.65"
      size="small"
      style="margin: 0 32px;">
    </cui-stat>
  </div>
`