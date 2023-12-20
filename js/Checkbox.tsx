import * as React from "react";

export function Checkbox(props) {
  const style: any = {
    width: "16px",
    height: "16px",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    boxSizing: "border-box",
    cursor: "pointer",
    userSelect: "none",
  };

  if (props.checked) {
    style.background = "#0984e3";
  } else {
    style.border = "1px solid #ccc";
  }

  return (
    <div onClick={props.onChecked} style={style}>
      {props.checked && "✓"}
    </div>
  );
}
