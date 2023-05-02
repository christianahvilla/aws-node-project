const mockProducts = require("./mock-data.cjs");

module.exports.product = async (event) => {
    const { queryStringParameters } = event;
    const { id } = queryStringParameters;
    const product = mockProducts.filter((prod) => prod.id === Number(id));

  const reponse = {
      statusCode: 200,
      headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products: [
            {
                ...product
            }
          ],
        id: id,
        limit: 30,
        skip: 0,
        total: product.length
    })
    }
    
    return reponse
};
