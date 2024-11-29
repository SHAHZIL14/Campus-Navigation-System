function WaterMark({ text }) {
  return (
    <div className="w-full flex justify-end px-5 ">
      <div className="whitespace-pre-line text-center py-2  text-product-color uppercase fredoka font-semibold bottom-10 right-10 text-sm lg:text-lg xl:text-xl">
        {text}
      </div>
    </div>
  );
}

export default WaterMark;
