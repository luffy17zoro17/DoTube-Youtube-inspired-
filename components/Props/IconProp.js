



const IconProp = ({icon,iconclassN, iconpos}) => {
    return (
        <div className={iconpos}>
           <div className={iconclassN}>{icon}</div> 
        </div>
    );
}

export default IconProp;