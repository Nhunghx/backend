const productController = require("../controllers/productController");

const route = (app) => {
  app.get("/productslist", productController.list);
  app.get("/products/:id", productController.detail);
};

export default route;
