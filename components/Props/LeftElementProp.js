import IconProp from "./IconProp";
import TextProp from "./TextProp";



const LeftElementProp = ({icon,title,classN,outerClassN,heading, headClassN}) => {
    return (
      <div className={classN}>
      <h1 className={headClassN}>{heading}</h1>
      <div className={outerClassN}>
        <div>
         <IconProp
           icon={icon}
         />
        </div> 
        <div>
         <TextProp
              title={title}
         />
        </div> 
      </div> 
      </div> 
    );
}

export default LeftElementProp;