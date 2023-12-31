const { onRequest } = require("firebase-functions/v2/https");
const axios = require("axios");

exports.groceries = onRequest({ cors: true }, async (request, response) => {
  const apiResponse = await axios.get(
    "https://www.grocery-shopper.shop/api/groceries?search=" +
      request.query.search +
      "&groceryStores=T%26T%20(Burnaby),Walmart%20(Burnaby),Superstore%20(Burnaby)&onSale=" +
      request.query.onSale
  );

  response.json(apiResponse.data);
});
