function GeneralButton({ styleObject, text }) {
  return (
    <button
      className={`h-fit w-fit px-6 rounded-md py-3 transition-all ease-in-out delay-100 border-2 text-white hover:text-product-color hover:border-product-color text-product-color   bg-product-color  hover:bg-transparent `}
      style={styleObject}
    >
      {text}
    </button>
  );
}
export default GeneralButton;
