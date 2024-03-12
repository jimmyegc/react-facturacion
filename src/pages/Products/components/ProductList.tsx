import { useDeleteProduct } from "../../../hooks/useProducts";

export const ProductList = ({ products }) => {
  const { mutate: deleteProduct } = useDeleteProduct();

  const handleDelete = (id) => {
    console.log("handleDelete", id);
    deleteProduct(id);
  };

  return (
    <>
      <div style={{ border: "1px solid aqua", padding: "10px 20px" }}>
        {products &&
          products.map((item) => (
            <div key={item.id}>
              <small>{item.id}</small>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
              {/*  <input
                type="checkbox"
                checked={item.inStock}
                id={item.id}
                onChange={(e) => {
                  updateProductMutation.mutate({
                    ...item,
                    inStock: e.target.checked,
                  });
                }}
              /> */}
              <label htmlFor={item.id}>In stock</label>
            </div>
          ))}
      </div>
    </>
  );
};
