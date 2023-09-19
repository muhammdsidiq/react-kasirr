import React from 'react';

function Header() {
  return (
    <>
      <nav className="text-md bg-500 py-5 px-20 flex justify-between items-center bg-cyan-400 shadow-md">
        {/* Logo perusahaan */}
        <div className="flex items-center">
          {/* Wrap dalam flex container */}
          {/* <img src={Logo} alt="Logo Nusa Learning" className="h-8" /> */}
          <div className="tex-lf font-medium">TokoKu</div>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-40">
          <input
            type="search"
            className="w-full p-2 bg-gray-10 border focus:outline-none rounded-lg"
            placeholder="Cari Pelatihan..."
          />
        </div>

        {/* Link dengan Icon */}
        <div className="flaxe space-x-10">
          <a href="/" className="hover:underline hover:text-purple-500">
            Beranda
          </a>
          <a
            href="/pusatPengetahuan"
            className="hover:underline hover:text-purple-500 relative"
          >
            Pelatihan
          </a>
          <a href="" className="hover:text-purple-500">
            {/* Tambahkan Dropdown di sini */}
          </a>

          {/* <a href="#" className="hover:underline hover:text-purple-500">
            <BellOutlined className='text-[20px]' />
          </a> */}
          <a href="/login" className="hover:underlined hover:text-purple-500">
            Login
          </a>
        </div>
      </nav>
    </>  
  );
}

export default Header;
