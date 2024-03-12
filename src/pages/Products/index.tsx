import Loading from "../../components/Loading";
import { useGetProducts } from "../../hooks/useProducts";
import { ProductForm } from "./components/ProductForm";
import { ProductList } from "./components/ProductList";

const Products = () => {
  const {
    isLoading,
    data: products,
    isError,
    error,
    isFetching,
    refetch,
  } = useGetProducts();

  return (
    <div>
      <ProductForm />
      <ProductList products={products} />
      {(isLoading || isFetching) && <Loading />}
    </div>
  );
};

export default Products;
