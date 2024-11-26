function GeneralPara(paraInfo){
    return <div className={`h-auto ${paraInfo.width}  text-justify leading-8 lg:leading-10 tracking-tight lg:tracking-wide px-5 lg:py-3 lg:px-7 my-10 lg:m-1  baloo-bhai-2  text-base lg:text-lg text-black`}>
        <p>{paraInfo.matter}</p>
    </div>;
}

export default GeneralPara;