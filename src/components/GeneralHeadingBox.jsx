function GeneralHeadingBox({heading}){
    return <div className="h-auto w-full px-7 flex justify-center  mx-auto  lg:my-5 border-product-color">
        <div className="text-2xl lg:text-4xl text-center fredoka capitalize font-semibold lg:font-bold text-product-color tracking-wide">{heading}</div>
    </div>;
};

export default GeneralHeadingBox;