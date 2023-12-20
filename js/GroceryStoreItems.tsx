import * as React from "react";
import { Item } from "./Item";

export function GroceryStoreItems(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      <h2>{props.storeName}</h2>
      {props.items.map((item) => (
        <Item {...item} />
      ))}
    </div>
  );
}
