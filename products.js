const mockProducts = require("./mock-data.cjs");

module.exports.products = async () => {
  const response = {
      statusCode: 200,
      headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products: mockProducts,
        limit: 30,
        skip: 0,
        total: mockProducts?.length
    })
    }
    
    return response;
};
