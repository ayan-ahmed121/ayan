import { Button } from "./ui/button";
import Image from "next/image";
import pp1 from "./images/pp1.png";
import pp2 from "./images/pp2.png";
import pp3 from "./images/pp3.png";
import pp4 from "./images/pp4.png";

export default function Topselling() {
    const products = [
      {
        name: "VERTICAL STRIPED SHIRT",
        image: pp1,
        price: "$212",
        originalPrice: "$232",
        rating: "4.5/5",
      },
      {
        name: "COURAGE GRAPHIC T-SHIRT",
        image: pp2,
        price: "$145",
        discount: "8%",
        rating: "3.5/5",
      },
      {
        name: "LOOSE FIT BERMUDA SHORTS",
        image: pp3,
        price: "$80",
        rating: "4.5/5",
      },
      {
        name: "FADED SKINNY JEANS",
        image: pp4,
        price: "$210",
        rating: "4.5/5",
      },
    ];
  
    return (
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-8">TOP SELLING</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <div className="flex items-center mt-2">
                  <div className="flex items-center text-yellow-500 mr-2">
                    {/* Replace stars with an icon library if desired */}
                    ⭐⭐⭐⭐⭐
                  </div>
                  <span className="text-gray-600 text-sm">{product.rating}</span>
                </div>
                <div className="mt-2">
                  <span className="text-lg font-bold text-gray-900">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through ml-2">
                      {product.originalPrice}
                    </span>
                  )}
                  {product.discount && (
                    <span className="text-sm text-red-500 ml-2">
                      {product.discount}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="secondary">
              View All
            </Button>
          </div>
        </div>
      </div>
    );
  }