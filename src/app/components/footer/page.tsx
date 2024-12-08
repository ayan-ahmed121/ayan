import visa from "./Visa.png";
import paypal from "./Paypal.png";
import vismaster from "./Mastercard.png";
import fb from "./logo-fb-simple 2.png";
import git from "./logo-github 1.png";
import insta from "./logo-instagram 1.png";
import twi from "./logo-twitter 2.png";
import Image from "next/image";

export default function Footer() {
    return (
      <footer className="bg-gray-200 text-gray-900">
        <div className="container mx-auto px-6 py-12">
          {/* Newsletter Section */}
          
  
          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
            <div className="">
              <h1 className="text-black font-extrabold mb-4 text-3xl">Shop.co</h1>
              <p>
                We have clothes that suit your style and which you're proud to
                wear. From women to men.
              </p>
              <div className="flex items-center space-x-4 mt-6">
              <Image src={fb} alt="Facebook" className="h-6" />
              <Image src={insta} alt="Instagram" className="h-6" />
              <Image src={twi} alt="Twitter" className="h-6" />
              <Image src={git} alt="Github" className="h-6" />

            </div>
            </div>
            <div>
              <h4 className="text-black font-bold mb-4 ">Company</h4>
              <ul>
                <li className="m-3">About</li>
                <li className="m-3">Features</li>
                <li className="m-3">Works</li>
                <li className="m-3">Career</li>
              </ul>
            </div>
            <div>
              <h4 className="text-black font-bold mb-4">Help</h4>
              <ul>
                <li className="m-3">Customer Support</li>
                <li className="m-3">Delivery Details</li>
                <li className="m-3">Terms & Conditions</li>
                <li className="m-3">Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-black font-bold mb-4">FAQ</h4>
              <ul>
                <li className="m-3">Account</li>
                <li className="m-3">Manage Deliveries</li>
                <li className="m-3">Orders</li>
                <li className="m-3">Payments</li>
              </ul>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-12 flex justify-between items-center">
            <p>Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="flex space-x-4">
              <Image src={visa} alt="Visa" className="h-6" />
              <Image src={paypal} alt="Paypal" className="h-6" />
              <Image src={vismaster} alt="Mastercard" className="h-6" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
  