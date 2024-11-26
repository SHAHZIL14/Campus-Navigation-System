function GeneralButton({ styleObject, text }) {
  return <button className={`h-14 w-60 hover:border-2 hover:border-white`} style={styleObject}>{text}</button>;
}
export default GeneralButton;
