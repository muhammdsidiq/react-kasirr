import React from "react";
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-5">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between space-y-5">
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h2 className="text-2xl font-bold mt-14">TokoKU</h2>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h2 className="text-2xl font-bold">About</h2>
            <ul className="mt-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h2 className="text-2xl font-bold">Service</h2>
            <ul className="mt-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Check Certificate</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h2 className="text-2xl font-bold">Follow Us On</h2>
            <ul className="mt-2 flex space-x-2">
            <BiLogoFacebookCircle size={32} color="blue" />
            <BiLogoInstagram  size={32} color="#C73B92"/>
            <BiLogoTwitter   size={32} color="#1DA1F2"/>
            <BiLogoYoutube    size={32} color="#FF0000"/>
            </ul>
          </div>
        </div>
        <br />
      </footer>
    )
}

export default Footer;