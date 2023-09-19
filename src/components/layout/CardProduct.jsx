function CardProduct() {
  return (
    <>
      <div className="flex justify-center items-center m-5">
        <div className="container flex max-w-md bg-white rounded-lg shadow-md">
          <div className="product-image flex-1 bg-blue-500 rounded-lg">
            <img src="../assets/indomie.png" alt="" />
          </div>
          <div className="product-details flex-1 p-4 flex flex-col">
            <div className="product-name text-lg font-bold mb-2">
              Nama Produk: Produk A
            </div>
            <div className="product-description text-sm mb-2">
              Deskripsi Produk: Deskripsi produk Anda di sini. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit.
            </div>
            <div className="product-price text-sm font-bold text-blue-500 mt-auto">
              Harga: Rp. 200.000
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardProduct;
