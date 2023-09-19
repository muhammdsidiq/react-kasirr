import React, {useState} from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import CardPesanan from "../layout/CardPesanan";


function Pesanan () {
    return (
        <>
        <Header />
        <div className="p-10  bg-gray-100">
        <span className="flex justify-between m-4">
          <h1 className="w-2/12 text-center rounded-3xl bg-slate-300 shadow-sm text-xl">
            Pesanan Anda
          </h1>
          <a
            href="/"
            className="w-2/12 text-center rounded-3xl bg-slate-300 shadow-sm text-xl"
          >
            Kembali
          </a>
        </span>

        <div className="flex w-full border-y-4  border-slate-400  p-10 justify-around items-start">
          <div className="w-1/2">
            <CardPesanan />
          </div>
        </div>
      </div>

        <Footer />
        </>
    );
}

export default Pesanan;