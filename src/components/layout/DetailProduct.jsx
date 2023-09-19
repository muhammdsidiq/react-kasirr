
function DetailPesanan() {
  return (
    <div className="flex justify-center items-center mt-20 bg-gray-100">
    <div className="container max-w-lg bg-white rounded-lg shadow-md p-4">
      <div className="order-details bg-blue-500 text-white rounded-t-lg p-2">
        <h2 className="text-lg font-bold">Detail Pesanan</h2>
      </div>
      <div className="opsi-pengiriman p-4 border-t border-b border-gray-300">
        <h3 className="text-sm font-semibold">Opsi Pengiriman</h3>
        <div className="flex justify-between">
        <span>

        <p className="text-sm">.................</p>
        <p className="text-sm">.................</p>
        <p className="text-sm">.................</p>
        <p className="text-sm">.................</p>
        </span>
        <div className="opsi-pengiriman-">
          <p className="text-sm font-semibold">Rp</p>
          <p className="text-sm font-semibold">Rp</p>
          <p className="text-sm font-semibold">Rp</p>
          <p className="text-sm font-semibold">Rp</p>
        </div>
        </div>
      </div>
      <div className="pesan p-4 border-b border-gray-300">
        <h3 className="text-sm font-semibold">Pesan :</h3>
      </div>
      <div className="total-pesanan p-4 flex justify-between">
        <h3 className="text-sm font-semibold ">Total Pesanan</h3>
        <p className="text-blue-500 text-sm font-semibold">Rp. 450.000</p>
      </div>
      <button className="tombol bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
        Buat Pesanan
      </button>
    </div>
  </div>
  );
}

export default DetailPesanan;
