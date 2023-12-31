const { onRequest } = require("firebase-functions/v2/https");
const axios = require("axios");
const logger = require("firebase-functions/logger");

exports.groceries = onRequest(async (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  console.log("testing");
  //   response.send("Hello from Firebase!");

  const apiResponse = await axios.get(
    "https://www.grocery-shopper.shop/api/groceries?search=" +
      request.query.search +
      "&groceryStores=T%26T%20(Burnaby),Walmart%20(Burnaby),Superstore%20(Burnaby)&onSale=" +
      request.query.onSale
  );

  logger.info("api response:", apiResponse.data);
  console.log("api response", apiResponse.data);

  response.json(apiResponse.data);
});
