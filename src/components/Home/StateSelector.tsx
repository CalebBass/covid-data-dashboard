import React from "react";
import { Select } from "antd";
import { States } from "../../api/StaticStateData";
import { IStateDictionary } from "../../interfaces/UnitedStatesInterfaces";
const { Option } = Select;

interface IProps {
  selectedPlaceCallback: (place: IStateDictionary) => void
}

const StateSelector: React.FC<IProps> = ({ selectedPlaceCallback }) => {

  const handleChange = (value: any) => {
    console.log(`selected ${value}`);

    console.log(`selected ${value.label}`);
    const place: IStateDictionary = { key: value.value, value: value.label}

    selectedPlaceCallback(place);
  };

  const BuildStateSelector = (): any => {
    let options = States.STATES_LIST.map((state, index) => {
      return <Option key={index} label={state.abbreviation} value={state.abbreviation}>{state.name}</Option>;
    });

    return options;
  };

  return (
    <>
      <Select
        // defaultValue="Select a state to see its data"
        style={{ width: 240 }}
        onChange={handleChange}
        labelInValue
      >
        {BuildStateSelector()}
      </Select>
    </>
  );
};

export default StateSelector;
