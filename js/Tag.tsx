import * as React from "react";

export function Tag(props) {
  return (
    <div
      style={{
        padding: "4px 12px",
        borderRadius: 6,
        background: props.background ?? "#e5e5e5",
        fontSize: 12,
        color: props.color ?? "#212121",
        display: "inline-block",
      }}
    >
      {props.children}
    </div>
  );
}
