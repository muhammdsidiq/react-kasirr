import { DownOutlined, SellOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const items = [
  {
    label: <a href="https://www.antgroup.com">1st Menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd Menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const MainNavbar = () => {
  return (
    <>
      <nav className="text-md bg-500 py-5 px-20 flex justify-between items-center bg-cyan-400 shadow-md">
        {/*Logo perusahaan */}
        <div className="flex items-center">
          {" "}
          {/* Wrap dalam flex container */}
          {/* <img src={Logo} alt="Logo Nusa Learning" classname="h-8" /> */}
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
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
                <a onclick={(e) => e.preventDefault()}>
                    <Space>
                        ID
                        <DownOutlined className='text-xs' />
                    </Space>
                </a>
            </Dropdown>
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
};

export default MainNavbar;


import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const item = [
  {
    label: <a href="https://www.antgroup.com">1st Menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd Menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

    <nav className="text-md bg-500 py-5 px-20 flex justify-between items-center bg-cyan-400 shadow-md">
      {/* Logo perusahaan */}
      <div className="flex items-center">
        {/* Wrap dalam flex container */}
        {/* <img src={Logo} alt="Logo Nusa Learning" className="h-8" /> */}
        <div className="text-lg font-medium">TokoKu</div>
      </div>

      {/* Search Bar */}
      <div className="flex-grow mx-40">
        <input
          type="search"
          className="w-full p-2 bg-gray-100 border focus:outline-none rounded-lg"
          placeholder="Cari Pelatihan..."
        />
      </div>

      {/* Link dengan Icon */}
      <div className="flex space-x-10">
        <a href="/" className="hover:underline hover:text-purple-500">
          Beranda
        </a>
        <a
          href="/pusatPengetahuan"
          className="hover:underline hover:text-purple-500 relative"
        >
          Pelatihan
        </a>
        <Dropdown
          overlay={(
            <Menu>
              {items.map((item) => {
                if (item.type === "divider") {
                  return <Menu.Divider />;
                } else {
                  return (
                    <Menu.Item key={item.key}>
                      {item.label}
                    </Menu.Item>
                  );
                }
              })}
            </Menu>
          )}
          trigger={["click"]}
        >
          <a href="" className="hover:text-purple-500">
            <Space>
              ID <DownOutlined className="text-xs" />
            </Space>
          </a>

        </Dropdown>
        <a href="/login" className="hover:underline hover:text-purple-500">
          Login
        </a>
      </div>
    </nav>
  




/////////////////////////////////////////////////////////////////////////////////
{/* <nav className="bg-blue-500 p-4">
<ul className="flex justify-center space-x-4">
  <li>
    <a href="/" className="text-white hover:text-blue-300">
      Beranda
    </a>
  </li>
  <li>
    <a href="/about" className="text-white hover:text-blue-300">
      Tentang
    </a>
  </li>
  <li>
    <a href="/services" className="text-white hover:text-blue-300">
      Layanan
    </a>
  </li>
  <li>
    <a href="/contact" className="text-white hover:text-blue-300">
      Kontak
    </a>
  </li>
</ul>
</nav> */}