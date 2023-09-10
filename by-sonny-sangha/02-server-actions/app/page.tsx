export default function Home() {
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
    </main>
  );
}
