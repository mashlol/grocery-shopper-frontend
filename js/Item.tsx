import * as React from "react";
import { Tag } from "./Tag";
import { getStoreTagColor } from "./getStoreTagColor";

export function Item(props) {
  const unitPrice =
    props.unitPrice != null && props.unitPrice.indexOf(",") !== -1
      ? props.unitPrice.split(",")[1]
      : props.unitPrice;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", width: 300, gap: 8 }}
    >
      <div
        style={{
          background: "#fff",
          width: 300,
          height: 140,
          borderRadius: 8,
        }}
      >
        <div
          style={{
            backgroundImage: "url(" + props.groceryImageUrl + ")",
            backgroundSize: "contain",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            padding: 8,
            boxSizing: "border-box",
          }}
        >
          {props.flag && <Tag background="#fdcb6e">{props.flag}</Tag>}
        </div>
      </div>
      <div
        style={{
          fontWeight: 400,
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {props.groceryName}
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        {props.price ? (
          <Tag>
            <strong>${props.price}</strong>
          </Tag>
        ) : null}
        <Tag>
          <a
            href={props.groceryProductUrl}
            target="_blank"
            style={{
              textDecoration: "none",
              color: getStoreTagColor(props.groceryStoreId),
            }}
          >
            {props.groceryStoreName.replace(/\s+.*$/, "")}
          </a>
        </Tag>
        {unitPrice && <Tag>{unitPrice}</Tag>}
      </div>
    </div>
  );
}
