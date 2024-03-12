import axios from "axios";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const productsApi = axios.create({
  baseURL: "http://localhost:3000/",
});

/*interface Product {
  id: integer;
  name: string;
  description: string;
  price: integer;
  inStock: boolean;
} */

export const getProducts = async (query = "") => {
  const { data } = await productsApi.get("/products");
  await delay(1500);
  return data;
  /*console.log("getProducts", data);
  console.log("query", query);
  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  console.log("filteredProducts", filteredProducts); */
  return filteredProducts;
};

export const createProduct = async (product) => {
  const { data } = await productsApi.post("/products", product);
  return data;
};

export const deleteProduct = async (id) => {
  console.log("...", id);
  const { data } = await productsApi.delete("/products/" + id);
  return data;
};

export const updateProduct = async (product) => {
  const { data } = await productsApi.put("/products/" + product.id, product);
  return data;
};
