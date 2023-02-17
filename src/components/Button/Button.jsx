import React from "react";
import "./Button.scss";
function Button({
  input,
  backgroundColor,
  color,
  width,
  border,
  borderRadius,
}) {
  return (
    <div
      className="button"
      style={{
        backgroundColor: backgroundColor,
        color: color,
        width: width,
        border: border,
        borderRadius: borderRadius,
      }}
    >
      {input}
    </div>
  );
}

export default Button;
