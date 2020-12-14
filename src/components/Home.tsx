import React, { useEffect, useState } from "react";
import { format, subDays } from "date-fns";
import axios from "axios";
import { Col, Row } from "antd";
import StateSelector from "./Home/StateSelector";
import DataMatrix from "./Home/DataMatrix";
import {
  ICdcData,
  IStateDictionary,
} from "../interfaces/UnitedStatesInterfaces";
import { CovidActNowApi } from "../api/CovidActNowApi";
import { ICovidActNow } from "../interfaces/CovidActNowInterfaces";
import { CovidApi } from "../api/CovidApi";
import { ICurrentState } from "../interfaces/CovidApiInterfaces";

const Home = () => {
  const [token, setToken] = useState<string>("");
  const [selectedPlace, setSelectedPlace] = useState<IStateDictionary>({
    key: "",
    value: "",
  });
  const [cdcData, setCdcData] = useState<ICdcData[]>([]);
  const [covidActNowData, setCovidActNowData] = useState<
    ICovidActNow | undefined
  >();
  const [currentState, setCurrentState] = useState<ICurrentState>();

  const SelectorCallback = (place: IStateDictionary) => {
    setSelectedPlace(place);
    console.log("Selected place is: ", selectedPlace);
    console.log("Selected place is 2: ", place);
  };

  const loginCallback = (token: string) => {
    setToken(token);
  };
  const getData = async () => {
    try {
      // var authApi = new AuthApi();
      // const token = await authApi.getAccessToken(username, password);
      // setToken(token);

      //var yesterday = new Date();
      var thirtyDaysAgo = subDays(new Date(), 30);
      //yesterday.setDate(yesterday.getDate() - 1)
      //var last24Hours = format(yesterday, 'yyyy-MM-dd')
      var last30Days = format(thirtyDaysAgo, "yyyy-MM-dd");

      //let queryLast24Hours = `$where=submission_date>='${last30Days}T00:00:00.000' and state='${selectedPlace.key}'`;
      let queryLast30Days = `$where=submission_date>='${last30Days}T00:00:00.000' and state='${selectedPlace.key}'`;

      // CDC Data
      const allUsData = await axios.get<ICdcData[]>(
        `https://data.cdc.gov/resource/9mfq-cb36.json?${queryLast30Days}`
      );
      setCdcData(allUsData.data);
      console.log(
        `cdc data on home for ${selectedPlace.key}: `,
        allUsData.data
      );

      // Covid ACt Now data
      const covidActNow = new CovidActNowApi();
      let actNowStateData = await covidActNow.getStateLatest(selectedPlace.key);
      console.log("covid act now result: ", actNowStateData);
      setCovidActNowData(actNowStateData);

      // call CTP backend
      const backendApi = new CovidApi();
      const currentStateResponse = await backendApi.getStateCurrent(
        token,
        selectedPlace.key
      );
      setCurrentState(currentStateResponse);
      console.log("backend response: ", currentStateResponse);
    } catch (error) {
      console.log("Error getting cdc data: ", error);
    }
  };

  useEffect(() => {
    if (selectedPlace.key !== "") {
      getData();
    }
  }, [selectedPlace]);

  return (
    <>
      <h1>Welcome to the Covid Data Dashboard</h1>
      <Row gutter={8}>
        <Col span={6}>
          <div style={{ margin: "15px" }}>
            <span>Please select a state: </span>
            <StateSelector selectedPlaceCallback={SelectorCallback} />
          </div>
        </Col>
        <Col span={6}>
          {/* <CountrySelector selectedPlaceCallback={SelectorCallback} /> */}
        </Col>
      </Row>
      {selectedPlace.key !== "" && cdcData.length !== 0 && (
        <DataMatrix
          cdcData={cdcData}
          location={selectedPlace.value}
          covidActNowData={covidActNowData}
        />
      )}
    </>
  );
};

export default Home;
