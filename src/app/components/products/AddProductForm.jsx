import { useForm } from "react-hook-form";
import z, { ZodDate } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const productSchema = z.object({
  title: z.string().min(3, "Title is required"),
  price: z.number().positive("Price must be a number > 0"),
  description: z.string().min(3, "Description is required"),
  category: z.string().min(3, "Category is required"),
  image: z.string().url("Image URL must be valid"),
});
const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = (data) => {
    // ✅ Simulate submission
    console.log("Submitted Product:", data);
    alert("Product submitted successfully!");
    reset(); // optional: reset form after submit
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded shadow max-w-md mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>

      <div className="mb-4">
        <label className="block mb-1">Title</label>
        <input {...register("title")} className="w-full border px-3 py-2 rounded" />
        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Price</label>
        <input
          type="number"
          step="0.01"
          {...register("price")}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Description</label>
        <textarea {...register("description")} className="w-full border px-3 py-2 rounded" />
        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Category</label>
        <select {...register("category")} className="w-full border px-3 py-2 rounded">
          <option value="">Select category</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
        {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Image URL</label>
        <input {...register("image")} className="w-full border px-3 py-2 rounded" />
        {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default AddProductForm;
