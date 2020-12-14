
import React from "react";
import { Select } from "antd";
import { States } from "../../api/StaticStateData";
const { Option } = Select;

interface IProps {
  selectedPlaceCallback: (place: string) => void
}

const CountrySelector: React.FC<IProps> = ({ selectedPlaceCallback }) => {

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    selectedPlaceCallback(value);
  };

  const BuildCountrySelector = (): any => {
    let options = States.STATES_LIST.map((state, index) => {
      return <Option value={state.name}>{state.name}</Option>;
    });

    return options;
  };

  return (
    <>
      <Select
        defaultValue="Select a country to see its data"
        style={{ width: 240 }}
        onChange={handleChange}
      >
        {BuildCountrySelector()}
      </Select>
    </>
  );
};

export default CountrySelector;
