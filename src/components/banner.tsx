import Image from "next/image";
import banner from "./images/banner.png";
import star from "./images/star.png";
import smallstar from "./images/small star.png";
import { Button } from "@/components/ui/button";

export default function Banner(){
    return(
        <div className="flex">
        <Image
          src={banner}
          alt="Banner"
          className="w-full object-cover rounded-lg"
        />
        <Image
          src={star}
          alt="star"
          className="absolute top-44 right-14 text-black"
        />
        <Image
          src={smallstar}
          alt="star"
          className="absolute top-96 right-96 mr-36 text-black"
        />

        <h1 className="text-5xl font-bold text-black absolute mt-32 ml-32 " >
          FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
        </h1>
        <p className="absolute text-gray-600 bottom-60 left-28 text-sm">
          Browse through our diverse range of meticulously crafted garments,<br />
          designed to bring out your individuality and cater to your sense of
          style.
        </p> 
        <Button className=" font-medium absolute bottom-44 left-32 px-16 rounded-full bg-black py-6">
          Shop Now 
        </Button>
      </div>
    )
}