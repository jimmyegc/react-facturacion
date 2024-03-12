/*import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProducts, deleteProduct, updateProduct } from "../api/productsAPI";
import ProductForm from "../components/ProductForm";
import Loading from "../components/Loading";
import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { AnimatePresence } from "framer-motion";*/

// Hooks
import { useGetProducts } from "../hooks/useProducts";

/*const onSuccess = (data) => {
  console.log("Perfom side effect after data fetching", data);
};

const onError = (error) => {
  console.log("Perfom side effect after encountering error", error);
}; */

const Products = () => {
  const {
    isLoading,
    data: products,
    isError,
    error,
    isFetching,
    refetch,
  } = useGetProducts();

  console.log({ isLoading, isFetching });

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  console.log(products);

  //const queryClient = useQueryClient();

  //const [search, setSearch] = useState("");

  //const [isFormVisible, setIsFormVisible] = useState(false);
  //const debouncedSearchTerm = useDebounce(search, 500);
  //console.log(debouncedSearchTerm);

  /*  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["products", debouncedSearchTerm],
    queryFn: () => getP|roducts(debouncedSearchTerm),
    select: (products) => products.sort((a, b) => b.id - a.id),
  }); */

  /*
  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: (data) => {
      console.log("onSuccess", data);
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const updateProductMutation = useMutation({
    mutationFn: updateProduct,
    /*
    onMutate: async(newProduct) => { // OPTIMISTIC
      await queryClient.cancelQueries['products']

      const previousProducts = queryClient.getQueryData(['products'])
      await queryClient.setQueryData(['products'], (oldProduct) => {
        if(oldProduct == null) return [newProduct]
        return [...oldProduct, newProduct]
      })
    }
    onSuccess: async (newProduct) => {
      console.log("onSuccess update:", newProduct);
      // 1. Actualizar el cache de react-query manualmente
      //await queryClient.setQueryData(["products"], (oldData) => {
//        if (oldData == null) return [newProduct];
  //      return [...oldData, newProduct];
    //  });
      queryClient.invalidateQueries({ queryKey: ["products"] }); // 2. Refetch
    },
  });

  const toogleForm = () => setIsFormVisible(!isFormVisible);
*/
  /*   if (isLoading) return <p>Cargando...</p>;
  else if (isError) return <div>Error: {error.message}</div>; */

  return (
    <>
      <h1>Product List</h1>
      {/* <pre>{JSON.stringify(data)}</pre>
      <button onClick={toogleForm}>Toggle Form</button>
      <AnimatePresence>{isFormVisible && <ProductForm />}</AnimatePresence>
      {search}
      <br />
      <div style={{ border: "1px solid blue" }}>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <br />
      {isLoading && <Loading />}
      <div style={{ border: "1px solid red" }}>
        {data &&
          data.map((item) => (
            <div key={item.id}>
              <small>{item.id}</small>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <button
                onClick={() => {
                  deleteProductMutation.mutate(item.id);
                }}
              >
                Delete
              </button>
              <input
                type="checkbox"
                checked={item.inStock}
                id={item.id}
                onChange={(e) => {
                  updateProductMutation.mutate({
                    ...item,
                    inStock: e.target.checked,
                  });
                }}
              />
              <label htmlFor={item.id}>In stock</label>
            </div>
          ))}
      </div> */}
    </>
  );
};

export default Products;
