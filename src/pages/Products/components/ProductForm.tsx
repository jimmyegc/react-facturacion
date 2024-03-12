import { useForm } from "react-hook-form";
import { useAddProduct } from "../../../hooks/useProducts";

export const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const { mutate: addProduct } = useAddProduct();

  const handleAddProduct = () => {
    const product = {
      id: "4",
      name: "TEMPORAL",
      description: "",
      price: 1,
      inStock: true,
    };
    console.log(product);
    addProduct(product);
  };

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    addProduct(data);
  });

  return (
    <>
      <div>Product Form</div>
      <form onSubmit={onSubmit}>
        <div>
          <label>name:</label>
          <input type="text" {...register("name", { required: true })} />
          {errors.name && <span>Nombre es requerido.</span>}
        </div>
        <div>
          <label>description:</label>
          <input type="text" {...register("description")} />
        </div>
        <div>
          <label>price:</label>
          <input type="number" {...register("price")} />
        </div>
        <div>
          <label>inStock:</label>
          <input type="checkbox" {...register("inStock")} />
        </div>
        <input type="reset" value="Clear" />
        <input type="submit" value="Save" />
      </form>
      {/* <button onClick={handleAddProduct}>New Product</button> */}
    </>
  );
};
