import SelectDropdown from "./DropDown";
function SelectButton() {
  return (
    <div className="w-11/12 md:w-2/3 lg:w-2/3 xl:w-1/2 p-4 flex justify-between ">
      <SelectDropdown optionsArray={["start-spot", "2", "3", "4", "5"]} />
      <SelectDropdown optionsArray={["end-spot", "2", "3", "4", "5"]} />
    </div>
  );
}
export default SelectButton;