import React from "react";

const ProSkeleton: React.FC<any> = ({ children }) => (
  <div
    style={{
      background: "#fafafa",
      padding: 24
    }}
  >
    {children}
  </div>
);

export default ProSkeleton;
