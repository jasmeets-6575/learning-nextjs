export interface Product {
  id?: number;
  product: string;
  price: string;
}

export default async function Home() {
  const res = await fetch("", {
    cache: "no-cache",
  });
  const products: Product[] = await res.json();

  return (
    <main>
      <h1 className="text-3xl font-bold text-center">Products Warehouse</h1>
      <form action="" className="flex flex-col gap-5 max-w-xl mx-auto p-5">
        <input
          type="text"
          name=""
          placeholder="Enter Product name..."
          className="border border-gray-300 rounded-md"
        />
        <input
          type="text"
          name=""
          placeholder="Enter Price name..."
          className="border border-gray-300 rounded-md"
        />
        <button className="border bg-blue-500 text-white p-2 rounded-md">
          Add Product
        </button>
      </form>

      <h2 className="font-bold p-5">List of Products</h2>
      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow">
            <p>{product.product}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
