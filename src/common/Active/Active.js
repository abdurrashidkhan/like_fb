import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Active({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div id="active">
      <Link
        style={{
          color: match ? "#04bd48" : "#9298A0",

        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {/* {match && " (active)"} */}
    </div>
  );
}

export default Active;