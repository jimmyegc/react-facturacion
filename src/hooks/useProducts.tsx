import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createProduct, getProducts, deleteProduct } from "../api/productsAPI";

export const useAddProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createProduct,
    onSuccess: (data) => {
      console.log("new product added", data);
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: (data) => {
      console.log("delete product success", data);
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

/*const useProduct = () => {
  const getProducts = async () => {
    return getProducts();
  };

    const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: (data) => {
      console.log("onSuccess", data);
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return {
    getProducts,
  };
}; */

//export default useProduct;
