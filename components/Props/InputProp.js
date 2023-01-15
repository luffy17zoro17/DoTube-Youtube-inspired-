



const InputProp = ({inplace,inclassN,inputpos}) => {
    return (
      <div className={inputpos}>
        <input
          placeholder={inplace}
          className={inclassN}
        />
      </div>  
    );
}

export default InputProp;