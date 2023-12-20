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

export default function AppRoot() {
  const [data, setData] = React.useState<any>([
    {
      groceryId: 24548,
      groceryName:
        "REESE'S PEANUT BUTTER CUPS Easter Candy, Half Pound Cup, REESE'S PEANUT BUTTER CUPS Easter Candy, Half Pound Cup 226g",
      groceryProductUrl:
        "https://www.walmart.ca/en/ip/REESE-S-PEANUT-BUTTER-CUPS-Easter-Candy-Half-Pound-Cup/10296378",
      groceryImageUrl:
        "https://i5.walmartimages.com/asr/b574116c-b8f2-4e17-9e3a-d48546b62006.0a5343021c514da8684df01916e81a93.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      groceryBrand: "REESE",
      grocerySalesUnit: null,
      grocerySalesUnitType: "EACH",
      groceryStoreId: 2,
      groceryStoreName: "Walmart (Burnaby)",
      upId: null,
      price: 5.98,
      itemPrice: 5.98,
      wasPrice: null,
      linePrice: null,
      unitPrice: "$2.63/100g",
      flag: null,
      tags: "Snacks & Candy, Chocolate, Chocolate Pieces",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T09:20:58.016Z",
    },
    {
      groceryId: 593236,
      groceryName: "Reese's Reese Minis Peanut Butter Cups Candy",
      groceryProductUrl:
        "https://www.realcanadiansuperstore.ca/reese-minis-peanut-butter-cups-candy/p/21353373_EA",
      groceryImageUrl:
        "https://assets.shop.loblaws.ca/products/21353373/b1/en/front/21353373_front_a01_@2.png",
      groceryBrand: "REESE'S",
      grocerySalesUnit: "ea",
      grocerySalesUnitType: "SOLD_BY_EACH",
      groceryStoreId: 5,
      groceryStoreName: "Superstore (Burnaby)",
      upId: null,
      price: 14.49,
      itemPrice: null,
      wasPrice: null,
      linePrice: null,
      unitPrice: "800 g, $1.81/100g",
      flag: null,
      tags: "Candy & Chocolate, Snacks, Chips & Candy",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T05:30:31.315Z",
    },
    {
      groceryId: 593230,
      groceryName: "Reese's Peanut Butter Cup Candy- Half Pound Cup",
      groceryProductUrl:
        "https://www.realcanadiansuperstore.ca/peanut-butter-cup-candy-half-pound-cup/p/20425817_EA",
      groceryImageUrl:
        "https://assets.shop.loblaws.ca/products/20425817/b1/en/front/20425817_front_a01_@2.png",
      groceryBrand: "REESE'S",
      grocerySalesUnit: "ea",
      grocerySalesUnitType: "SOLD_BY_EACH",
      groceryStoreId: 5,
      groceryStoreName: "Superstore (Burnaby)",
      upId: null,
      price: 6.49,
      itemPrice: null,
      wasPrice: null,
      linePrice: null,
      unitPrice: "226 g, $2.87/100g",
      flag: null,
      tags: "Snacks, Chips & Candy, Candy & Chocolate",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T05:30:31.315Z",
    },
    {
      groceryId: 24532,
      groceryName: "REESE PEANUT BUTTER CUPS Snack Sized Candy, 124g; 8 count",
      groceryProductUrl:
        "https://www.walmart.ca/en/ip/REESE-PEANUT-BUTTER-CUPS-Snack-Sized-Candy/6000201691967",
      groceryImageUrl:
        "https://i5.walmartimages.com/asr/1cf5e949-a012-47e9-92f8-d119d29dfe87.4f73f7dc0e0136fca3093644df3acc5f.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      groceryBrand: "REESE'S",
      grocerySalesUnit: null,
      grocerySalesUnitType: "EACH",
      groceryStoreId: 2,
      groceryStoreName: "Walmart (Burnaby)",
      upId: null,
      price: 2.48,
      itemPrice: 2.48,
      wasPrice: null,
      linePrice: null,
      unitPrice: "$2/100g",
      flag: "3 for $6",
      tags: "Snacks & Candy, Halloween Chocolate, Halloween Treats",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T09:20:58.016Z",
    },
    {
      groceryId: 24547,
      groceryName: "REESE'S PEANUT BUTTER CUPS Candy, 46 g",
      groceryProductUrl:
        "https://www.walmart.ca/en/ip/reeses-peanut-butter-cups-candy/10149741",
      groceryImageUrl:
        "https://i5.walmartimages.ca/images/Large/062/154/6000204062154.jpg",
      groceryBrand: "REESE",
      grocerySalesUnit: null,
      grocerySalesUnitType: "EACH",
      groceryStoreId: 2,
      groceryStoreName: "Walmart (Burnaby)",
      upId: null,
      price: 0.98,
      itemPrice: 0.98,
      wasPrice: null,
      linePrice: null,
      unitPrice: "$2.13/100g",
      flag: "Best seller",
      tags: "Snacks & Candy, Chocolate, Chocolate Pieces",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T09:20:58.016Z",
    },
    {
      groceryId: 584014,
      groceryName: "Reese's Peanut Butter Cups Candy",
      groceryProductUrl:
        "https://www.realcanadiansuperstore.ca/peanut-butter-cups-candy/p/20582012_EA",
      groceryImageUrl:
        "https://assets.shop.loblaws.ca/products/20582012/b1/en/front/20582012_front_a01_@2.png",
      groceryBrand: "REESE'S",
      grocerySalesUnit: "ea",
      grocerySalesUnitType: "SOLD_BY_EACH",
      groceryStoreId: 5,
      groceryStoreName: "Superstore (Burnaby)",
      upId: null,
      price: 1.69,
      itemPrice: null,
      wasPrice: null,
      linePrice: null,
      unitPrice: "46 g, $3.67/100g",
      flag: "$1.00 LIMIT 6",
      tags: "Candy & Chocolate, Snacks, Chips & Candy",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T05:30:31.315Z",
    },
    {
      groceryId: 593227,
      groceryName: "Reese's PEANUT BUTTER CUPS candy",
      groceryProductUrl:
        "https://www.realcanadiansuperstore.ca/peanut-butter-cups-candy/p/20581714_EA",
      groceryImageUrl:
        "https://assets.shop.loblaws.ca/products/20581714/b1/en/front/20581714_front_a01_@2.png",
      groceryBrand: "REESE'S",
      grocerySalesUnit: "ea",
      grocerySalesUnitType: "SOLD_BY_EACH",
      groceryStoreId: 5,
      groceryStoreName: "Superstore (Burnaby)",
      upId: null,
      price: 2.39,
      itemPrice: null,
      wasPrice: null,
      linePrice: null,
      unitPrice: "62 g, $3.85/100g",
      flag: null,
      tags: "Candy & Chocolate, Snacks, Chips & Candy",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T05:30:31.315Z",
    },
    {
      groceryId: 593231,
      groceryName: "Reese's Peanut Butter Cups Candy King Size",
      groceryProductUrl:
        "https://www.realcanadiansuperstore.ca/peanut-butter-cups-candy-king-size/p/21000285_EA",
      groceryImageUrl:
        "https://assets.shop.loblaws.ca/products/21000285/b1/en/front/21000285_front_a01_@2.png",
      groceryBrand: "REESE'S",
      grocerySalesUnit: "ea",
      grocerySalesUnitType: "SOLD_BY_EACH",
      groceryStoreId: 5,
      groceryStoreName: "Superstore (Burnaby)",
      upId: null,
      price: 2.39,
      itemPrice: null,
      wasPrice: null,
      linePrice: null,
      unitPrice: "79 g, $3.03/100g",
      flag: null,
      tags: "Candy & Chocolate, Snacks, Chips & Candy",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T05:30:31.315Z",
    },
    {
      groceryId: 24546,
      groceryName: "REESE'S PEANUT BUTTER CUP Candy, 4 * 46g",
      groceryProductUrl:
        "https://www.walmart.ca/en/ip/REESE-S-PEANUT-BUTTER-CUP-Candy/6000189678480",
      groceryImageUrl:
        "https://i5.walmartimages.com/asr/b17948be-52a5-4436-a280-fc2ce42d0148.93143c7c128d087206dc4ca2aacceb2e.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      groceryBrand: "REESE'S",
      grocerySalesUnit: null,
      grocerySalesUnitType: "EACH",
      groceryStoreId: 2,
      groceryStoreName: "Walmart (Burnaby)",
      upId: null,
      price: 4.78,
      itemPrice: 4.78,
      wasPrice: null,
      linePrice: null,
      unitPrice: "$2.60/100g",
      flag: "2 for $7",
      tags: "Chocolate, Chocolate Pieces, Snacks & Candy",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T09:20:58.016Z",
    },
    {
      groceryId: 5162,
      groceryName:
        "Breyers Reese's Peanut Butter Cups Frozen Dessert, 1.66 L Frozen Dessert",
      groceryProductUrl:
        "https://www.walmart.ca/en/ip/Breyers-Reese-s-nbsp-Peanut-nbsp-Butter-Cups-Frozen-Dessert/10311291",
      groceryImageUrl:
        "https://i5.walmartimages.com/asr/a7b68c8f-2c87-43cd-9bc2-db7261545c77.6ecb640750713f3c7ebc0e81ecb59aa5.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      groceryBrand: "BREYERS",
      grocerySalesUnit: null,
      grocerySalesUnitType: "EACH",
      groceryStoreId: 2,
      groceryStoreName: "Walmart (Burnaby)",
      upId: null,
      price: 4.97,
      itemPrice: 4.97,
      wasPrice: 7.47,
      linePrice: null,
      unitPrice: "30¢/100ml",
      flag: "Rollback",
      tags: "Ice Cream & Treats, Ice Cream Tubs & Pints, Frozen Food",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T10:29:08.405Z",
    },
    {
      groceryId: 596873,
      groceryName:
        "Breyers Frozen Dessert for a delicious treat Reese's Peanut Butter Cups",
      groceryProductUrl:
        "https://www.realcanadiansuperstore.ca/frozen-dessert-for-a-delicious-treat-reese-s-peanu/p/20318551001_EA",
      groceryImageUrl:
        "https://assets.shop.loblaws.ca/products/20318551001/b1/en/front/20318551001_front_a01_@2.png",
      groceryBrand: "BREYERS",
      grocerySalesUnit: "ea",
      grocerySalesUnitType: "SOLD_BY_EACH",
      groceryStoreId: 5,
      groceryStoreName: "Superstore (Burnaby)",
      upId: null,
      price: 6.99,
      itemPrice: null,
      wasPrice: null,
      linePrice: null,
      unitPrice: "1.66 l, $0.42/100ml",
      flag: null,
      tags: "Ice Cream & Desserts, Frozen",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T06:00:46.664Z",
    },
    {
      groceryId: 18503,
      groceryName: "HERSHEY'S REESE Sticks Minis Peanut Butter Cups, 180 g",
      groceryProductUrl:
        "https://www.walmart.ca/en/ip/hersheys-reese-sticks-minis-peanut-butter-cups/10149390",
      groceryImageUrl:
        "https://i5.walmartimages.ca/images/Large/988/264/988264.jpg",
      groceryBrand: "HERSHEY'S",
      grocerySalesUnit: "EACH",
      grocerySalesUnitType: "EACH",
      groceryStoreId: 2,
      groceryStoreName: "Walmart (Burnaby)",
      upId: null,
      price: 0,
      itemPrice: null,
      wasPrice: null,
      linePrice: null,
      unitPrice: "",
      flag: "",
      tags: "Chocolate, Chips & Snacks",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-19T08:00:12.144Z",
    },
    {
      groceryId: 593217,
      groceryName: "Reese's Chocolate, Peanut Butter Cups Snack Sized Candy",
      groceryProductUrl:
        "https://www.realcanadiansuperstore.ca/chocolate-peanut-butter-cups-snack-sized-candy/p/21333668_EA",
      groceryImageUrl:
        "https://assets.shop.loblaws.ca/products/21333668/b1/en/front/21333668_front_a01_@2.png",
      groceryBrand: "REESE'S",
      grocerySalesUnit: "ea",
      grocerySalesUnitType: "SOLD_BY_EACH",
      groceryStoreId: 5,
      groceryStoreName: "Superstore (Burnaby)",
      upId: null,
      price: 2.29,
      itemPrice: null,
      wasPrice: null,
      linePrice: null,
      unitPrice: "124 g, $1.85/100g",
      flag: "3 FOR $6.00",
      tags: "Snacks, Chips & Candy, Candy & Chocolate",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T05:30:31.315Z",
    },
    {
      groceryId: 24543,
      groceryName: "REESE'S Minis PEANUT BUTTER CUPS Candy, 104g",
      groceryProductUrl:
        "https://www.walmart.ca/en/ip/reeses-minis-peanut-butter-cups-candy/6000197103134",
      groceryImageUrl:
        "https://i5.walmartimages.ca/images/Large/514/721/6000204514721.jpg",
      groceryBrand: "REESE",
      grocerySalesUnit: null,
      grocerySalesUnitType: "EACH",
      groceryStoreId: 2,
      groceryStoreName: "Walmart (Burnaby)",
      upId: null,
      price: 2.98,
      itemPrice: 2.98,
      wasPrice: null,
      linePrice: null,
      unitPrice: "$2.87/100g",
      flag: "2 for $5",
      tags: "Snacks & Candy, Chocolate, Chocolate Pieces",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T09:20:58.016Z",
    },
    {
      groceryId: 24541,
      groceryName: "REESE'S Miniatures PEANUT BUTTER CUPS Candy, 230g",
      groceryProductUrl:
        "https://www.walmart.ca/en/ip/REESE-S-Miniatures-PEANUT-BUTTER-CUPS-Candy/10149690",
      groceryImageUrl:
        "https://i5.walmartimages.com/asr/96175148-b0ff-4962-b4d8-f6ded3464205.2d55af92402dfe17b492f3d3f15acc0c.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      groceryBrand: "REESE'S",
      grocerySalesUnit: null,
      grocerySalesUnitType: "EACH",
      groceryStoreId: 2,
      groceryStoreName: "Walmart (Burnaby)",
      upId: null,
      price: 4.98,
      itemPrice: 4.98,
      wasPrice: null,
      linePrice: null,
      unitPrice: "$2.17/100g",
      flag: "2 for $8",
      tags: "Chocolate Pieces, Chocolate, Snacks & Candy",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T09:20:58.016Z",
    },
    {
      groceryId: 24544,
      groceryName: "REESE'S Minis PEANUT BUTTER CUPS Candy, 210g",
      groceryProductUrl:
        "https://www.walmart.ca/en/ip/REESE-S-Minis-PEANUT-BUTTER-CUPS-Candy/10149419",
      groceryImageUrl:
        "https://i5.walmartimages.com/asr/b28ba211-a12b-4ac5-9f57-f9e654ac395a.30433ebbcb1341c298a68b62d05f93c9.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      groceryBrand: "REESE'S",
      grocerySalesUnit: null,
      grocerySalesUnitType: "EACH",
      groceryStoreId: 2,
      groceryStoreName: "Walmart (Burnaby)",
      upId: null,
      price: 4.98,
      itemPrice: 4.98,
      wasPrice: null,
      linePrice: null,
      unitPrice: "$2.37/100g",
      flag: "2 for $8",
      tags: "Snacks & Candy, Chocolate, Chocolate Pieces",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T09:20:58.016Z",
    },
    {
      groceryId: 24562,
      groceryName: "REESE’S THiNS PEANUT BUTTER CUPS Dark Chocolate, 165g",
      groceryProductUrl:
        "https://www.walmart.ca/en/ip/REESE-S-THiNS-PEANUT-BUTTER-CUPS-Dark-Chocolate/6000201691979",
      groceryImageUrl:
        "https://i5.walmartimages.com/asr/d6f458fb-47d7-4ef0-a99f-a9872116ff05.b9e34fbf78e559e53875c34f6fad7ca7.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      groceryBrand: "REESE'S",
      grocerySalesUnit: null,
      grocerySalesUnitType: "EACH",
      groceryStoreId: 2,
      groceryStoreName: "Walmart (Burnaby)",
      upId: null,
      price: 4.98,
      itemPrice: 4.98,
      wasPrice: null,
      linePrice: null,
      unitPrice: "$3.02/100g",
      flag: "2 for $8",
      tags: "Snacks & Candy, Chocolate, Chocolate Pieces",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T09:20:58.016Z",
    },
    {
      groceryId: 24563,
      groceryName: "REESE’S THiNS PEANUT BUTTER CUPS Milk Chocolate, 165g",
      groceryProductUrl:
        "https://www.walmart.ca/en/ip/REESE-S-THiNS-PEANUT-BUTTER-CUPS-Milk-Chocolate/6000201691976",
      groceryImageUrl:
        "https://i5.walmartimages.com/asr/02ecf21a-d663-49e6-9ffd-67e0cd49a1d3.8f8ba6b2314954f3846915e0ef59deae.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      groceryBrand: "REESE'S",
      grocerySalesUnit: null,
      grocerySalesUnitType: "EACH",
      groceryStoreId: 2,
      groceryStoreName: "Walmart (Burnaby)",
      upId: null,
      price: 4.98,
      itemPrice: 4.98,
      wasPrice: null,
      linePrice: null,
      unitPrice: "$3.02/100g",
      flag: "2 for $8",
      tags: "Chocolate Pieces, Snacks & Candy, Chocolate",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T09:20:58.016Z",
    },
    {
      groceryId: 24561,
      groceryName: "REESE'S THiNS PEANUT BUTTER CUPS White Creme, 165g",
      groceryProductUrl:
        "https://www.walmart.ca/en/ip/REESE-S-THiNS-PEANUT-BUTTER-CUPS-White-Creme/6000201691982",
      groceryImageUrl:
        "https://i5.walmartimages.com/asr/557e35b0-b920-4acf-bea0-4c6b1580ed8c.44f11cc82c93a77395475e23d1fa0a73.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      groceryBrand: "REESE'S",
      grocerySalesUnit: null,
      grocerySalesUnitType: "EACH",
      groceryStoreId: 2,
      groceryStoreName: "Walmart (Burnaby)",
      upId: null,
      price: 4.98,
      itemPrice: 4.98,
      wasPrice: null,
      linePrice: null,
      unitPrice: "$3.02/100g",
      flag: "2 for $8",
      tags: "Snacks & Candy, Chocolate, Chocolate Pieces",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T09:20:58.016Z",
    },
    {
      groceryId: 593215,
      groceryName: "Reese's Candy Peanut Butter Cups",
      groceryProductUrl:
        "https://www.realcanadiansuperstore.ca/candy-peanut-butter-cups/p/20573405_EA",
      groceryImageUrl:
        "https://assets.shop.loblaws.ca/products/20573405/b1/en/front/20573405_front_a01_@2.png",
      groceryBrand: "REESE'S",
      grocerySalesUnit: "ea",
      grocerySalesUnitType: "SOLD_BY_EACH",
      groceryStoreId: 5,
      groceryStoreName: "Superstore (Burnaby)",
      upId: null,
      price: 5.29,
      itemPrice: null,
      wasPrice: null,
      linePrice: null,
      unitPrice: "184 g, $2.88/100g",
      flag: "$3.99 LIMIT 6",
      tags: "Candy & Chocolate, Snacks, Chips & Candy",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T05:30:31.315Z",
    },
    {
      groceryId: 593218,
      groceryName: "Reese's Chocolate, Peanut Butter Cups White Creme Thins",
      groceryProductUrl:
        "https://www.realcanadiansuperstore.ca/chocolate-peanut-butter-cups-white-creme-thins/p/21332392_EA",
      groceryImageUrl:
        "https://assets.shop.loblaws.ca/products/21332392/b1/en/front/21332392_front_a01_@2.png",
      groceryBrand: "REESE'S",
      grocerySalesUnit: "ea",
      grocerySalesUnitType: "SOLD_BY_EACH",
      groceryStoreId: 5,
      groceryStoreName: "Superstore (Burnaby)",
      upId: null,
      price: 5.49,
      itemPrice: null,
      wasPrice: null,
      linePrice: null,
      unitPrice: "165 g, $3.33/100g",
      flag: "$3.99 LIMIT 6",
      tags: "Candy & Chocolate, Snacks, Chips & Candy",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T05:30:31.315Z",
    },
    {
      groceryId: 593225,
      groceryName: "Reese's Miniatures PEANUT BUTTER CUPS Candy",
      groceryProductUrl:
        "https://www.realcanadiansuperstore.ca/miniatures-peanut-butter-cups-candy/p/20637798_EA",
      groceryImageUrl:
        "https://assets.shop.loblaws.ca/products/20637798/b1/en/front/20637798_front_a01_@2.png",
      groceryBrand: "REESE'S",
      grocerySalesUnit: "ea",
      grocerySalesUnitType: "SOLD_BY_EACH",
      groceryStoreId: 5,
      groceryStoreName: "Superstore (Burnaby)",
      upId: null,
      price: 5.49,
      itemPrice: null,
      wasPrice: null,
      linePrice: null,
      unitPrice: "230 g, $2.39/100g",
      flag: "$3.99 LIMIT 6",
      tags: "Candy & Chocolate, Snacks, Chips & Candy",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T05:30:31.315Z",
    },
    {
      groceryId: 593239,
      groceryName: "Reese's Thins Peanut Butter Cups Milk Chocolate",
      groceryProductUrl:
        "https://www.realcanadiansuperstore.ca/thins-peanut-butter-cups-milk-chocolate/p/21331874_EA",
      groceryImageUrl:
        "https://assets.shop.loblaws.ca/products/21331874/b1/en/front/21331874_front_a01_@2.png",
      groceryBrand: "REESE'S",
      grocerySalesUnit: "ea",
      grocerySalesUnitType: "SOLD_BY_EACH",
      groceryStoreId: 5,
      groceryStoreName: "Superstore (Burnaby)",
      upId: null,
      price: 5.49,
      itemPrice: null,
      wasPrice: null,
      linePrice: null,
      unitPrice: "165 g, $3.33/100g",
      flag: "$3.99 LIMIT 6",
      tags: "Candy & Chocolate, Snacks, Chips & Candy",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T05:30:31.315Z",
    },
    {
      groceryId: 593238,
      groceryName: "Reese's Thins Peanut Butter Cups Dark Chocolate",
      groceryProductUrl:
        "https://www.realcanadiansuperstore.ca/thins-peanut-butter-cups-dark-chocolate/p/21332391_EA",
      groceryImageUrl:
        "https://assets.shop.loblaws.ca/products/21332391/b1/en/front/21332391_front_a01_@2.png",
      groceryBrand: "REESE'S",
      grocerySalesUnit: "ea",
      grocerySalesUnitType: "SOLD_BY_EACH",
      groceryStoreId: 5,
      groceryStoreName: "Superstore (Burnaby)",
      upId: null,
      price: 5.49,
      itemPrice: null,
      wasPrice: null,
      linePrice: null,
      unitPrice: "165 g, $3.33/100g",
      flag: "$3.99 LIMIT 6",
      tags: "Candy & Chocolate, Snacks, Chips & Candy",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-19T05:30:31.569Z",
    },
    {
      groceryId: 395560,
      groceryName: "REESE'S Minis PEANUT BUTTER CUPS Candy, 400g",
      groceryProductUrl:
        "https://www.walmart.ca/en/ip/REESE-S-Minis-PEANUT-BUTTER-CUPS-Candy/6000193173199",
      groceryImageUrl:
        "https://i5.walmartimages.com/asr/e74c9853-fa14-40ff-b2fb-5bdd339c5a89.e0047548ffca8fb96120eb14cdb4a929.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      groceryBrand: "REESE'S",
      grocerySalesUnit: "EACH",
      grocerySalesUnitType: "EACH",
      groceryStoreId: 2,
      groceryStoreName: "Walmart (Burnaby)",
      upId: null,
      price: 7.47,
      itemPrice: null,
      wasPrice: null,
      linePrice: 7.47,
      unitPrice: "$1.87/100g",
      flag: "",
      tags: "Snacks & Candy, Chocolate, Chocolate Pieces",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-19T08:00:12.144Z",
    },
    {
      groceryId: 24542,
      groceryName: "REESE'S Miniatures PEANUT BUTTER CUPS Candy, 900g",
      groceryProductUrl:
        "https://www.walmart.ca/en/ip/REESE-S-Miniatures-PEANUT-BUTTER-CUPS-Candy/6000202562454",
      groceryImageUrl:
        "https://i5.walmartimages.com/asr/3fe679f0-b722-42fa-9d97-35208f58c232.b4679fc0744dc8cbc9c6d3fd85932535.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      groceryBrand: "REESE'S",
      grocerySalesUnit: null,
      grocerySalesUnitType: "EACH",
      groceryStoreId: 2,
      groceryStoreName: "Walmart (Burnaby)",
      upId: null,
      price: 11.98,
      itemPrice: 11.98,
      wasPrice: null,
      linePrice: null,
      unitPrice: "$1,198/100g",
      flag: null,
      tags: "Chocolate Pieces, Snacks & Candy, Chocolate",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T09:20:58.016Z",
    },
    {
      groceryId: 24545,
      groceryName: "REESE'S Minis PEANUT BUTTER CUPS Candy, 800g",
      groceryProductUrl:
        "https://www.walmart.ca/en/ip/REESE-S-Minis-PEANUT-BUTTER-CUPS-Candy/6000202562451",
      groceryImageUrl:
        "https://i5.walmartimages.com/asr/a1966f3b-f513-48fe-9955-6b5cbc034501.07142818cc6c0b2cf6c34af2010d99aa.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      groceryBrand: "REESE'S",
      grocerySalesUnit: null,
      grocerySalesUnitType: "EACH",
      groceryStoreId: 2,
      groceryStoreName: "Walmart (Burnaby)",
      upId: null,
      price: 11.98,
      itemPrice: 11.98,
      wasPrice: null,
      linePrice: null,
      unitPrice: "$1,198/100g",
      flag: null,
      tags: "Snacks & Candy, Chocolate, Chocolate Pieces",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T09:20:58.016Z",
    },
    {
      groceryId: 596557,
      groceryName: "Reese's Miniatures PEANUT BUTTER CUPS Candy",
      groceryProductUrl:
        "https://www.realcanadiansuperstore.ca/miniatures-peanut-butter-cups-candy/p/21102569_EA",
      groceryImageUrl:
        "https://assets.shop.loblaws.ca/products/21102569/b1/en/front/21102569_front_a01_@2.png",
      groceryBrand: "REESE'S",
      grocerySalesUnit: "ea",
      grocerySalesUnitType: "SOLD_BY_EACH",
      groceryStoreId: 5,
      groceryStoreName: "Superstore (Burnaby)",
      upId: null,
      price: 14.49,
      itemPrice: null,
      wasPrice: null,
      linePrice: null,
      unitPrice: "900 g, $1.61/100g",
      flag: null,
      tags: "Candy & Chocolate, Snacks, Chips & Candy",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T05:30:31.315Z",
    },
    {
      groceryId: 593216,
      groceryName: "Reese's Chocolate, Candy Peanut Butter Cups Family Pouch",
      groceryProductUrl:
        "https://www.realcanadiansuperstore.ca/chocolate-candy-peanut-butter-cups-family-pouch/p/20737600_EA",
      groceryImageUrl:
        "https://assets.shop.loblaws.ca/products/20737600/b1/en/front/20737600_front_a01_@2.png",
      groceryBrand: "REESE'S",
      grocerySalesUnit: "ea",
      grocerySalesUnitType: "SOLD_BY_EACH",
      groceryStoreId: 5,
      groceryStoreName: "Superstore (Burnaby)",
      upId: null,
      price: 9.49,
      itemPrice: null,
      wasPrice: null,
      linePrice: null,
      unitPrice: "400 g, $2.37/100g",
      flag: null,
      tags: "Candy & Chocolate, Snacks, Chips & Candy",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-20T05:30:31.315Z",
    },
    {
      groceryId: 24540,
      groceryName:
        "REESE'S Lovers Miniatures, Chocolate Gift Box,150g, White and Dark Chocolate peanut butter cups",
      groceryProductUrl:
        "https://www.walmart.ca/en/ip/REESE-S-Lovers-Miniatures-Chocolate-Gift-Box-150g/6000205306500",
      groceryImageUrl:
        "https://i5.walmartimages.com/asr/021fccbf-71cf-47cf-a40d-fd70737db5b2.067852db076b3978591fad56c683a95a.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      groceryBrand: "REESE",
      grocerySalesUnit: "EACH",
      grocerySalesUnitType: "EACH",
      groceryStoreId: 2,
      groceryStoreName: "Walmart (Burnaby)",
      upId: null,
      price: 5.98,
      itemPrice: null,
      wasPrice: null,
      linePrice: 5.98,
      unitPrice: null,
      flag: "",
      tags: "Snacks & Candy, Holiday Chocolate, Holiday Treats",
      reportedBy: "admin",
      lastModifiedAt: "2023-12-17T08:15:13.042Z",
    },
  ]);

  React.useEffect(() => {
    setData(null);
    fetch(
      "https://www.grocery-shopper.shop/api/groceries?search=bread&groceryStores=T%26T%20(Burnaby),Walmart%20(Burnaby),Superstore%20(Burnaby)&onSale=false"
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  if (data == null) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 40,
        padding: 40,
        justifyContent: "center",
      }}
    >
      {data.map((item) => (
        <Item {...item} />
      ))}
    </div>
  );
}
