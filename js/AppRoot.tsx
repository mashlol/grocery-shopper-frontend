import * as React from "react";

function Tag(props) {
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

function getStoreTagColor(storeId: number) {
  if (storeId === 2) {
    return "#0984e3";
  }

  if (storeId === 5) {
    return "#d63031";
  }

  return "#00b894";
}

function Item(props) {
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
        <Tag color={getStoreTagColor(props.groceryStoreId)}>
          {props.groceryStoreName.replace(/\s+.*$/, "")}
        </Tag>
        {unitPrice && <Tag>{unitPrice}</Tag>}
      </div>
    </div>
  );
}

function GroceryStoreItems(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      <h2>{props.storeName}</h2>
      {props.items.map((item) => (
        <Item {...item} />
      ))}
    </div>
  );
}

export default function AppRoot() {
  const [data, setData] = React.useState<any>([]);
  const [query, setQuery] = React.useState("");

  const groupedData = React.useMemo(() => {
    if (data == null) {
      return null;
    }

    return data.reduce((acc, cur) => {
      const key = cur.groceryStoreId;
      if (acc[key] == null) {
        acc[key] = [];
      }
      acc[key].push(cur);
      return acc;
    }, {});
  }, [data]);

  const content =
    data == null ? (
      <div>Loading...</div>
    ) : (
      <>
        {groupedData[2] && (
          <GroceryStoreItems storeName={"Walmart"} items={groupedData[2]} />
        )}
        {groupedData[5] && (
          <GroceryStoreItems storeName={"Superstore"} items={groupedData[5]} />
        )}
        {groupedData[4] && (
          <GroceryStoreItems storeName={"T&T"} items={groupedData[4]} />
        )}
      </>
    );

  return (
    <div>
      <div
        style={{
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 60,
          gap: 120,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "min(100vw, 1140px)",
            padding: "0 20px",
          }}
        >
          <h1>GROCERY SHOPPER</h1>
          <form
            onSubmit={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setData(null);
              fetch(
                "https://www.grocery-shopper.shop/api/groceries?search=" +
                  encodeURIComponent(query) +
                  "&groceryStores=T%26T%20(Burnaby),Walmart%20(Burnaby),Superstore%20(Burnaby)&onSale=false"
              )
                .then((res) => res.json())
                .then((data) => setData(data))
                .catch((error) => console.error(error));
            }}
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  top: 0,
                  bottom: 0,
                  left: 8,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                🔍
              </div>
              <input
                style={{
                  padding: "8px 40px",
                  border: "none",
                  borderRadius: 32,
                  background: "#f4f5fb",
                }}
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <button style={{ display: "none" }}>Search</button>
          </form>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: 120,
          padding: 40,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {content}
      </div>
    </div>
  );
}
