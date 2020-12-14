import React, { useEffect, useState } from "react";
import axios from "axios";
import StatsUnitedStates from "./StatsUnitedStates";
import { Row, Col } from "antd";
import { UrlConstants } from "../../api/UrlConstants";
import StatesStatColumn from "./StatesStatColumn";
import SimpleStatistic from "../Home/SimpleStatistic";
import Graph from "./Graph";
import {
  ICdcData,
  IUsaLastThirstyDays,
} from "../../interfaces/UnitedStatesInterfaces";
import YesterdayCasesAndDeathsUsa from "./YesterdayCasesAndDeathsUsa";
import TotalCasesUs from "./TotalCasesUs";
import moment from "moment";

const UnitedStatesHome: React.FC = () => {
  const [stateData, setStateData] = useState<any>();
  const [unitedStatesLastThirtyDays, setUnitedStatesLastThirtyDays] = useState<
    IUsaLastThirstyDays | undefined | null
  >();
  const [allUsData, setAllUsData] = useState<ICdcData[]>();
  //let now = format(new Date(), "yyyy-MM-dd");
  const today = new Date();
  today.setDate(today.getDate() - 1.5);
  const now = moment(today).format('yyyy-MM-DD');
  let query = `$where=submission_date>='${now}T00:00:00.000'`;

  // find somewhere that has TODAY and just add to what I have

  useEffect(() => {
    const getData = async () => {
      try {
        const stateResponse = await axios.get(UrlConstants.GET_STATES);
        const lastThirtsyDaysResponse = await axios.get(UrlConstants.GET_HISTORICAL_USA_30DAYS);
        const allUsData = await axios.get<ICdcData[]>(`https://data.cdc.gov/resource/9mfq-cb36.json?${query}`);
        
        setStateData(stateResponse.data);
        setAllUsData(allUsData.data);
        setUnitedStatesLastThirtyDays(lastThirtsyDaysResponse.data);

        //console.log("cities response: ", cityResponse);
      } catch (error) {
        console.log("Error getting states: ", error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <Row gutter={8}>
        <Col span={8}>
          <StatesStatColumn stateData={stateData} />
        </Col>
        <Col span={8}>
          <YesterdayCasesAndDeathsUsa />
        </Col>
        <Col span={8}>
          <TotalCasesUs totalUsData={allUsData} />
        </Col>
      </Row>
      <Row>
        {/* graph<Graph lastThirtyDaysUsa={unitedStatesLastThirtyDays} /> */}
      </Row>
      <Row>
        <div>
          <h1>Overall Stats</h1>
          <StatsUnitedStates stateData={stateData} />
        </div>
      </Row>
    </div>
  );
};

export default UnitedStatesHome;
