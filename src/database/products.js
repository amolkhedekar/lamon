import { db } from "../services/firebase";

const productDB = db.ref("/products");

const productMethods = {
  getAllProducts: () => {
    return productDB;
  },
  getProduct: (id) => {
    return productDB.child(id);
  },
  createProduct: (product) => {
    return productDB.push(product);
  },
  updateProduct: (id, value) => {
    return productDB.child(id).update(value);
  },
  deleteProduct: (id) => {
    return productDB.child(id).remove();
  },
  deleteAllProducts: () => {
    return productDB.remove();
  },
};

export default productMethods;
