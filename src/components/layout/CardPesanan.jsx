function CardPesanan() {
  return (
    <>
      <div className="w-full">
        <div className="border-y-2 m-4 py-5 px-50">
          <div className="bg-blue-500 text-white p-20 rounded-lg">
            <h1 className="font-semibold text-[1.5em]">Produk</h1>
            <br />
            <label className="flex items-center justify-between my-2">
              <span>
                <h4>Ekonomi</h4>
              </span>
              <p>1 X</p>
              <p>Rp 3.000</p>
            </label>
            <label className="flex items-center justify-between my-5">
              <span>
                <h4>Rinso</h4>
              </span>
              <p className="m-2 ml-7">1 X</p>
              <p>Rp 1.000</p>
            </label>
            <hr /> <br />
            <label className="flex items-center justify-between my-2">
              <span>
                <b>
                  <span className="text-[1.5em]">Jasa Pengiriman</span>
                </b>
                <br />
                <br />
                <p className="mt-2">SICEPAT EKSPRES</p><br />
              </span>
              <p className="mt-14">Rp 25.000</p>
            </label>
            <hr />
          </div>
          <div className="py-5 bg-blue-500 text-white rounded-3xl mt-4 p-4">
            <div className="flex items-center">
              <label htmlFor="pesan" className="block font-semibold mr-2">
                Total Pembayaran
              </label>
              <b>
                <p className="ml-96">Rp. 26.000</p>
              </b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPesanan;
