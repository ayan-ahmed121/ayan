import { Button } from "./ui/button";

export default function Newsletter(){
    return(
        <div className="bg-black text-white rounded-lg p-6 flex flex-col md:flex-row justify-between items-center mb-12">
            <h3 className="text-2xl font-bold uppercase mb-4 md:mb-0">
              Stay up to date about our latest offers
            </h3>
            <div className="flex  w-full md:w-auto">
            <div className="flex items-center border border-gray-300 rounded-full bg-gray-100 px-4 py-2 max-w-md mx-auto">
                  {/* Search Input */}
                  <input
                  type="text"
                  placeholder="Enter Your Email Address"
                  className="flex-1 pr-40 bg-transparent outline-none text-gray-700 placeholder-gray-500"
                  /></div>
             <Button variant={"outline"} className=" text-black rounded-full">
                Subscribe To Newsletter
             </Button>
            </div>
          </div>
    )
}
