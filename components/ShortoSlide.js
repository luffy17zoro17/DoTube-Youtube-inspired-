import { Shorto } from "../VideoFiles";
import VideoGalleryProp from "./Props/VideoGalleryProp";



const ShortoSlide = () => {
    return (

        <div className="flex pt-[11rem]
           gap-[3rem] pl-[3rem] pr-[4rem]
           bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600
           overflow-x-hidden 
           overflow-x-scroll
           md:pl-[20rem] 
           lg:overflow-x-hidden
           lg:hover:overflow-x-scroll">
          <h1 className="absolute text-3xl mt-[-5rem] text-yellow-500">Shorto</h1>  
          {Shorto.map((shortz)=>(
            <div key={shortz.id}>
                <VideoGalleryProp
                    vsrc={shortz.vid}
                    vclassN={`rounded-full shadow-lg shadow-black border-4 
                             border-yellow-500 mb-5`}
                    vwd={"300"}
                    vht={"300"}       
                    vtitle={shortz.vtitle}
                   
                    author={shortz.author} 
                    postDetails={shortz.details}
                />
            </div>
          ))}  
        </div>

    );
}

export default ShortoSlide;