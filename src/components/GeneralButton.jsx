function GeneralButton({ styleObject, text }) {
  return (
    <button
      className={`h-12 lg:h-14  lg:w-56 transition-all ease-in-out delay-100 border-2 text-white hover:text-product-color hover:border-product-color text-product-color   bg-product-color  hover:bg-transparent `}
      style={styleObject}
    >
      {text}
    </button>
  );
}
export default GeneralButton;
