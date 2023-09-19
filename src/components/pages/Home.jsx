import React, { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function Home() {
  const [products, setProducts] = useState([
    "Produk 1",
    "Produk 2",
    "Produk 3",
    "Produk 4",
    "Produk 5",
    "Produk 6",
    "Produk 7",
  ]);

  const horizontalLineStyle = {
    color: "black", // Warna garis
    backgroundColor: "black", // Warna latar belakang garis
    width: "90%",
    height: "2px", // Tinggi garis
    border: "none", // Hapus border
  };

  const handleNext = () => {
    // Geser produk pertama ke akhir
    setProducts((prevProducts) => [...prevProducts.slice(1), prevProducts[0]]);
  };

  const handlePrev = () => {
    // Geser produk terakhir ke awal
    setProducts((prevProducts) => [
      prevProducts[prevProducts.length - 1],
      ...prevProducts.slice(0, prevProducts.length - 1),
    ]);
  };

  return (
    <>
      <Header />

      <div
        style={{
          background: "url('/path/to/your/header-image.jpg') center/cover", // Gantilah dengan URL gambar header sketsa Anda
          marginTop: "50px",
          marginLeft: "145px",
          width: "1300px",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          color: "black",
          borderRadius: "10px",
        }}
      >
        Header Image
      </div>
      <br />
      <br />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handlePrev}>Previous</button>
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              width: "150px",
              height: "150px",
              background: "lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            {product}
          </div>
        ))}
        <button onClick={handleNext}>Next</button>
      </div>

      <br />
      <br />
      <center>
        <hr style={horizontalLineStyle} />
      </center>
      <br />
      <br />

      {/* Kategori 1 */}

      <h1 className="text-3xl ml-60 font-bold mt-6 mb-4">Kategori 1</h1>

      <div className="flex gap-3 justify-center mt-[25px]">
        <div className="h-[250px] rounded-md bg-[gray]">
          <div className="w-[150px] h-[150px] rounded-md bg-[cyan]"></div>
        </div>
        <div className="h-[250px] rounded-md bg-[gray]">
          <div className="w-[150px] h-[150px] rounded-md bg-[cyan]"></div>
        </div>
        <div className="h-[250px] rounded-md bg-[gray]">
          <div className="w-[150px] h-[150px] rounded-md bg-[cyan]"></div>
        </div>
        <div className="h-[250px] rounded-md bg-[gray]">
          <div className="w-[150px] h-[150px] rounded-md bg-[cyan]"></div>
        </div>
        <div className="h-[250px] rounded-md bg-[gray]">
          <div className="w-[150px] h-[150px] rounded-md bg-[cyan]"></div>
        </div>
        <div className="h-[250px] rounded-md bg-[gray]">
          <div className="w-[150px] h-[150px] rounded-md bg-[cyan]"></div>
        </div>
        <div className="h-[250px] rounded-md bg-[gray]">
          <div className="w-[150px] h-[150px] rounded-md bg-[cyan]"></div>
        </div>
        <div className="h-[250px] rounded-md bg-[gray]">
          <div className="w-[150px] h-[150px] rounded-md bg-[cyan]"></div>
        </div>
      </div>

      {/* Kategori 2 */}

      <br /><br />

      <h1 className="text-3xl ml-60 font-bold mt-6 mb-4">Kategori 2</h1>

      <div className="flex gap-3 flex justify-center mt-[25px]">
        <div className="h-[250px] rounded-md bg-[gray]">
          <div className="w-[150px] h-[150px] rounded-md bg-[blue]"></div>
        </div>
        <div className="h-[250px] rounded-md bg-[gray]">
          <div className="w-[150px] h-[150px] rounded-md bg-[blue]"></div>
        </div>
        <div className="h-[250px] rounded-md bg-[gray]">
          <div className="w-[150px] h-[150px] rounded-md bg-[blue]"></div>
        </div>
        <div className="h-[250px] rounded-md bg-[gray]">
          <div className="w-[150px] h-[150px] rounded-md bg-[blue]"></div>
        </div>
        <div className="h-[250px] rounded-md bg-[gray]">
          <div className="w-[150px] h-[150px] rounded-md bg-[blue]"></div>
        </div>
        <div className="h-[250px] rounded-md bg-[gray]">
          <div className="w-[150px] h-[150px] rounded-md bg-[blue]"></div>
        </div>
        <div className="h-[250px] rounded-md bg-[gray]">
          <div className="w-[150px] h-[150px] rounded-md bg-[blue]"></div>
        </div>
        <div className="h-[250px] rounded-md bg-[gray]">
          <div className="w-[150px] h-[150px] rounded-md bg-[blue]"></div>
        </div>
      </div>

      <br /><br /><br /><br />

      <center>
        <hr style={horizontalLineStyle} />
      </center>
      

      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default Home;

// function Home () {
//     return (
//         <>
//         <Header/>

//         </>
//     )
// }

// export default Home;

// const kategori  () => { "kategori": Unknown word,
//   return(
//     <>

//   )
// }
// </>

// export  default kategori
