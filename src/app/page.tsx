import Category from "@/components/category";
import Header from "./components/header/page";

import Banner from "@/components/banner";
import Logo from "@/components/logogroup";
import Arrival from "@/components/new arrival";
import Topselling from "@/components/Topselling";
import Feedback from "@/components/feadback";
import Footer from "./components/footer/page";
import Newsletter from "@/components/newletter";
export default function Home() {
  return (
    <div className="w-full h-screen">
      <Header />
      <Banner/>
      <Logo/>
      <Arrival/>
      <Topselling/>
      <Category/>
      <Feedback/>
      <Newsletter/>
      <Footer/>
    
    </div>
  );
}
