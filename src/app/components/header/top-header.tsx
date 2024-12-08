import Image from "next/image";
import top from "./top bar.png";
export default function TopHeader(){
    return(
        <div className="md:bg-black md:p-2 md:w-full md:justify-between md:items-center md:flex  max-md:hidden">
            <div className="max-w-7xl mx-auto flex items-center justify-center">
            <p className="text-white  flex justify-center gap-2">Sign up and get 20% off to your first order.
              <span className="font-bold underline">Sign Up Now!</span> </p>
            </div>
            <Image src={top} alt="icon" className="mr-16"/>
        </div>
    )
}