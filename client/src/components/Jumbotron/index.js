import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 175, clear: "both", paddingTop: 5, textAlign: "center", marginTop: 25, marginBottom: 25 }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
