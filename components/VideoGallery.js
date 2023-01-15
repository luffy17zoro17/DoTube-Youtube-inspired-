
import VideoGalleryProp from "./Props/VideoGalleryProp";

import VideoList from "../VideoFiles";









const VideoGallery = () =>{

    return (
      <div className="
       w-full text-white justify-center
        mt-[5rem] flex flex-wrap
        md:ml-[17rem]">
      {VideoList.map((videoo)=>(  
      <div key={videoo.id} className="p-6">
       <VideoGalleryProp
        vsrc={videoo.vid}
        vclassN={`rounded-tl-3xl shadow shadow-black border-4 
          border-yellow-500 border-r-0`}
        vwd={"360"}
        vht={"210"}       
        iht={"550"}
        iwd={"550"}
        vtitle={videoo.vtitle}
        isrc={videoo.img}
        iclassN={"rounded-full object-cover h-[2.5rem] w-[2.5rem] shadow-md shadow-black"} 
        author={videoo.author} 
        postDetails={videoo.details}
       />
      </div> 
       ))}
    
      <div>
         
      </div>
      
  
      </div>  
    );
}

export default VideoGallery;