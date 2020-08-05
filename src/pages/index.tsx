import React from "react";
import { Link } from "umi";

export default () => (
  <div style={{ height: 24, lineHeight: 24 }}>
    Hello UmiJS.
    <Link to="/about">&nbsp; Hello World</Link>
  </div>
);
