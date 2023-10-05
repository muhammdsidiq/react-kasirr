import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

function Kategori1() {
  const [product, setProduct] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // URL tempat Anda mendapatkan data JSON
        const url = "../../public/data/product.json";
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Terjadi kesalahan saat mengambil data.');
        }
        const jsonData = await response.json();
        setProduct(jsonData.product);
        console.log(jsonData.product);
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="bg-[#F5F5F5] p-1 w-[11rem] m-5 ml-[4rem] text-[#949494] text-[32px] text-center rounded-md">
        Kategori 1
      </h1>
      <div className="flex justify-center">
        {product.map((item, index) => (
          <div key={index} className="w-[14.1rem] ml-2 px-2">
            <div className="bg-white rounded-md overflow-hidden shadow-lg mb-10">
              <img src={item.urlPoster} alt="" className="w-[229.62px] h-[229px]" />
              <div className="py-8 px-6 font-bold text-[20px]">{item.nama}</div>
              <div className="px-7 -mt-7">{item.price}</div>
              <div className="px-7 ">{item.desc}</div>
              <div className="ml-[100px] p-2">
                <Button icon={<ShoppingCartOutlined />}></Button> 
                <Button className="bg-[#F14320] text-white">Beli</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Kategori1;








































// import React, { useState, useEffect } from 'react';

// function ProductList() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Mengambil data produk menggunakan Fetch API dalam useEffect
//     fetch('../../publick/data/product.json')
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Data Produk</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             ID: {product.id}, Nama: {product.name}, Harga: {product.harga}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ProductList;
