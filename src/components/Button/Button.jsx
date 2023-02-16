import React from "react";
import "./Button.scss";
function Button({ input, backgroundColor, color, width, border }) {
  return (
    <div
      className="button"
      style={{
        backgroundColor: backgroundColor,
        color: color,
        width: width,
        border: border
      }}
    >
      {input}
    </div>
  );
}

export default Button;
