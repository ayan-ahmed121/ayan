import Image from "next/image";
import Logo1 from "./images/logo 1.png";
import Logo2 from "./images/logo2.png";
import logo3 from "./images/logo3.png";
import logo4 from "./images/logo4.png";
import logo5 from "./images/logo5.png";



export default function Logo(){
    return(
        <div className="bg-black w-full h-28 flex justify-around items-center">
        <Image src={Logo1} alt="logo" className="h-8"/>
        <Image src={Logo2} alt="logo" className="h-8"/>
        <Image src={logo3} alt="logo" className="h-8"/>
        <Image src={logo4} alt="logo" className="h-8"/>
        <Image src={logo5} alt="logo" className="h-8"/>
        </div>
    )
}