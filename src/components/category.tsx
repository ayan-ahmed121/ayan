import Casual from "./images/casual.png";
import Formal from "./images/formal.png";
import Party from "./images/party.png";
import Gym from "./images/gym.png";
import Image from "next/image";
export default function Category() {
  const styles = [
    {
      title: "Casual",
      image: Casual, // Replace with your image paths
    },
    {
      title: "Gym",
      image: Gym,
    },
  ];
  const style = [
    {
      title: "Formal",
      image: Formal,
    },
    {
      title: "Party",
      image: Party,
    },
  ];
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 ">
        <div className="grid grid-cols-3 gap-4 bg-gray-200 border-gray-500 rounded-3xl p-16">
        <h2 className="col-span-3 text-3xl font-bold text-center mb-8 ">
          <span className="font-black text-black uppercase">
            Browse by Dress Style
          </span>
        </h2>
          <div className=" bg-gray-200 relative rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
            <Image src={Casual} alt="Casual" />
            <div className="absolute inset-0 flex  items-start justify-start">
                <h3 className="text-black font-bold text-3xl m-6">Causal</h3>
              </div>
          </div>
          <div className="col-span-2 relative rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
            <Image src={Formal} alt="Formal" />
            <div className="absolute inset-0 flex items-start justify-start">
                <h3 className="text-black font-bold text-3xl m-6">Formal</h3>
              </div>
          </div>
          <div className=" bg-gray-200 col-span-2 relative rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
            <Image src={Party} alt="Party" />
            <div className="absolute inset-0 flex items-start justify-start">
                <h3 className="text-black font-bold text-3xl m-6">Party</h3>
              </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
            <Image src={Gym} alt="Gym" />
            <div className="absolute inset-0 flex items-start justify-start">
                <h3 className="text-black font-bold text-3xl m-6">Gym</h3>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
