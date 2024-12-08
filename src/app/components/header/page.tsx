import { ChevronDown } from "lucide-react";
import icon from "./icon.png"
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Image from "next/image";
export default function Header (){
    return(
        <div className="flex justify-center items-center m-3">
            <h1 className="flex font-extrabold mx-6 pl-16 text-3xl">SHOP.CO</h1>
            <ul className="flex gap-6 items-center">
              <li>
                <p className="flex gap-1">Shop <ChevronDown/></p>
              </li>
              <li className="">On Sale</li>
              <li className="">New Arrival </li>
              <li className="">Brands </li>
              <li>
                <div className="flex items-center border border-gray-300 rounded-full bg-gray-100 px-4 py-2 max-w-md mx-auto">
                  {/* Search Input */}
                  <input
                  type="text"
                  placeholder="Search for products..."
                  className="flex-1 pr-40 bg-transparent outline-none text-gray-700 placeholder-gray-500"
                  /></div>
              </li>
              <li>
              <div className="flex mr-6">
              <Image src={icon} alt="icon"/>
             </div>
              </li>
            </ul>
              
        </div>
    )
}