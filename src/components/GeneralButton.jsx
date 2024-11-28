function GeneralButton({ styleObject, text }) {
  return (
    <button
      className={`h-12 w-44 lg:h-14 lg:w-56 transition-all ease-in-out delay-100  text-white hover:text-product-color hover:border-2 border-product-color text-product-color   bg-product-color  hover:bg-transparent `}
      style={styleObject}
    >
      {text}
    </button>
  );
}
export default GeneralButton;
