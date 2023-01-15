import Image from "next/image";






const VideoGalleryProp = ({vtitle,vclassN,vwd,vht,vsrc,videopos,author,postDetails,iclassN,isrc,iht,iwd}) => {
    return (
      <div className={videopos}>
        {vsrc && (
        <div>  
        <iframe className={vclassN} width={vwd} height={vht} src={vsrc} 
        title={vtitle} frameBorder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen={true}> 
        </iframe>
        </div>
        )}

        <div className="flex pt-4 gap-4">
        <div>
          {isrc && (
          <Image
            src={isrc}
            height={iht}
            width={iwd}
            className={iclassN}
            alt=""
          />
          )}
        </div>
        <div className="w-[18rem]">
        <h2 className="font-semibold">{vtitle}</h2>
        <h3>{author}</h3>
        <span className="text-sm">{postDetails}</span>
        </div>
        </div>
      </div>  
    );
}

export default VideoGalleryProp;



