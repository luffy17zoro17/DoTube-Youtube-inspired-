import Image from "next/image";


const ImageProp = ({isrc,iht,iwd,iclassN,imagepos}) => {
    return (
      <div className={imagepos}>
      
        <Image
          src={isrc}
          height={iht}
          width={iwd}
          className={iclassN}
          alt=""
        />
        
      </div>  
    );
}

export default ImageProp;