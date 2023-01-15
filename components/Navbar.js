import { useSelector } from "react-redux";
import IconProp from "./Props/IconProp";
import InputProp from "./Props/InputProp";
import TextProp from "./Props/TextProp";

import { selectNavIcons } from "../reducers/NavSlice/NavSlice";



const Navbar = () => {

    const allNavicons= useSelector(selectNavIcons);

    

    return (
      <div className="flex justify-center py-1
         shadow fixed top-0 items-center z-10 h-[3.5rem]
         bg-gradient-to-t from-transparent via-gray-600 to-black
          w-full">
         {allNavicons.map((item)=>(
           
            <span key={item.id}
             className={`flex items-center ${item.id===1 && `absolute left-2 cursor-pointer`}
                         ${item.id===2 && `absolute left-11`}
                         ${item.id===5 && `absolute right-12`}
                         ${item.id===6 && `absolute right-4`}
                         ${item.id===4 && `rounded-full bg-cyan-700 mx-3 pr-3 py-2.5 flex shadow-md shadow-black
                                          hidden lg:flex`}
                         ${item.id===3 && `rounded-r-full p-1 bg-red-700 px-3 shadow-md shadow-black
                                           hidden md:flex md:w-[37vw] `}
             `}>
               {item.id===3 && 
               (<InputProp inclassN="outline-none rounded-l-full 
                 px-5 py-2 border-2 border-yellow-600
                  shadow-inner shadow-black hover:shadow-purple-700
                  hidden md:flex md:w-[28vw] lg:w-[30vw]
                  xl:w-[31vw]"
                inplace="Search"/>)}
               <IconProp
                  icon={item.icon}
                  iconclassN={`text-yellow-400 pl-3 cursor-pointer hover:text-orange-500`}
               />
               {item.id===2 && (<TextProp titleClass="font-bold text-2xl ml-3
                 bg-gray-600 
                 font-mono text-orange-500 pt-1 rounded-l-full px-3 shadow shadow-black" title="DoTube"/>)}
               
            </span>
         ))}
      </div>
    );
}

export default Navbar;