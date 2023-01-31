import { useSelector } from "react-redux";
import HorizLine from "./Props/HorizLine";
import IconProp from "./Props/IconProp";
import LeftElementProp from "./Props/LeftElementProp";
import TextProp from "./Props/TextProp";
import { selectLeftBar } from "../reducers/LeftBarSlice/LeftBarSlice";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Footer from "./Footer";





const LeftSideBar = () => {

    const AllLeftValues = useSelector(selectLeftBar);
    return (
      <div className="w-[17rem] rounded-tr-3xl text-yellow-200
      bg-gradient-to-r from-transparent to-black shadow-xl
      shadow-black
      fixed top-[3.5rem] bottom-0
      overflow-y-scroll

      lg:overflow-y-hidden 
      hover:overflow-y-scroll
       hidden md:flex">
       <div className="">  
        {AllLeftValues.map((item)=>(
         <div key={item.id} className={`my-5 space-y-5`}>
          <LeftElementProp
             title={item.title.map((text)=>(
                  <div key={text?.id} className={`my-[0.86rem] 
                   p-1 pr-2 cursor-pointer rounded-tr-xl 
                   hover:shadow hover:shadow-black hover:bg-black 
                  ${item.id===1 && text.id===2 && `mb-7`}
                  ${(item.id===2 && text.id===9) && `mt-9`}`}>
                 
                        {text?.value} 
                      
                  </div>))}
             icon={item.icon.map((ico)=>(
               
                <div key={ico.id} className={`my-3 p-1 
                 ${item.id===1 && ico.id===2 && `mb-7`}
                 ${ico.id===9 && `mt-[2rem]`}`}>
                    {ico?.value}
                    {(item.id===2 && ico?.id===8) && <HorizLine hrClassN="w-[14.3rem] absolute left-0 mt-3"/>}   
                </div>   
                ))}
             outerClassN={item.outerClassN}
             heading={item.heading}
             headClassN={"ml-6"}
          />
          <HorizLine hrClassN={item.hrClassN}/>
          
          {(item.id===1) && (
            <>
             <TextProp 
                title={`Sign in to like videos, comment and subscribe.`}
                titleClass="text-[0.98rem] mx-6"
             />
              <span className="flex gap-3 justify-center w-[8rem] 
               ml-6 rounded-full border py-1 cursor-pointer shadow
               shadow-black
                hover:bg-black">
             <IconProp
                icon={<AccountCircleIcon/>}
             /> Sign in
             </span>
             <HorizLine hrClassN={item.hrClassN}/>
            </> 
          )}  
         </div> 
        ))}
        <Footer/>
        </div> 
      </div>  
    );
}

export default LeftSideBar;