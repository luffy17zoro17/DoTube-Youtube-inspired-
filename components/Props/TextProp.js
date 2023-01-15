

const TextProp = ({title,detail,titleClass,detailClass,textpos}) => {

    return (
      <div className={textpos}>
        <h1 className={titleClass}>{title}</h1>
        <p className={detailClass}>{detail}</p>
      </div>  
    );
}

export default TextProp;