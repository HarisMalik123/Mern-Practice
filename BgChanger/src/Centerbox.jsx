import React from "react";

function CenteredBox({ color }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="w-64 h-64 bg-white shadow-lg rounded-lg flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
      </div>
    </div>
  );
}

export default CenteredBox;