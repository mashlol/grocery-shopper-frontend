import * as React from "react";
import { Checkbox } from "./Checkbox";
import { GroceryStoreItems } from "./GroceryStoreItems";

export default function AppRoot() {
  const [data, setData] = React.useState<any>([]);
  const [queryText, setQueryText] = React.useState("");
  const [query, setQuery] = React.useState("");
  const [saleOnly, setSaleOnly] = React.useState(false);

  React.useEffect(() => {
    if (!query) {
      return;
    }

    setData(null);
    fetch(
      "https://groceries-rngyxzdt3a-uc.a.run.app/?search=" +
        encodeURIComponent(query) +
        "&groceryStores=T%26T%20(Burnaby),Walmart%20(Burnaby),Superstore%20(Burnaby)&onSale=" +
        (saleOnly ? "true" : "false")
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, [query, saleOnly]);

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
              setQuery(queryText);
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div
                style={{
                  fontSize: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                On Sale Only{" "}
                <Checkbox
                  checked={saleOnly}
                  onChecked={() => setSaleOnly((old) => !old)}
                />
              </div>
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
                  value={queryText}
                  onChange={(e) => setQueryText(e.target.value)}
                />
              </div>
              <button style={{ display: "none" }}>Search</button>
            </div>
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
