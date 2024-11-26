function GeneralPara(paraInfo){
    return <div className={`h-auto ${paraInfo.width}  text-justify leading-10 tracking-wide py-3 px-7 m-1  baloo-bhai-2 text-lg text-black`}>
        <p>{paraInfo.matter}</p>
    </div>;
}

export default GeneralPara;