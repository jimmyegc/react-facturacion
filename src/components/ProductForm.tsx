import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../api/productsAPI";
import { motion } from "framer-motion";

const ProductForm = () => {
  const queryClient = useQueryClient();

  const addProductMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      console.log("Product added!");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData);
    addProductMutation.mutate({
      ...product,
      inStock: true,
    });
  };

  return (
    <motion.div
      enter={{
        op,
      }}
      exit={{
        scale: 0,
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <form onSubmit={handleSubmit} style={{ border: "1px solid #000" }}>
        <h3>Product Form</h3>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" />
        </div>

        <div>
          <label htmlFor="price">Precio</label>
          <input type="number" id="price" name="price" />
        </div>

        <button type="submit">Add Product</button>
      </form>
    </motion.div>
  );
};

export default ProductForm;
