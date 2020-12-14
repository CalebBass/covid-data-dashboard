import React from "react";
import { Card, Col, Row, Statistic, Table } from "antd";
import {
  ICdcData,
} from "../../interfaces/UnitedStatesInterfaces";
import SimpleStatistic from "./SimpleStatistic";
import { ArrowUpOutlined } from "@ant-design/icons";
import TableLastThirtyDays from "./TableLastThirtyDays";
import { CasesAndDeathsLineChart } from "./CasesAndDeathsLineChart";
import { ICovidActNow } from "../../interfaces/CovidActNowInterfaces";

interface IProps {
  cdcData: ICdcData[];
  location: string | undefined;
  covidActNowData: ICovidActNow | undefined;
  //rawStateData: IRawStatesData[]
}

const DataMatrix: React.FC<IProps> = ({ cdcData, location, covidActNowData }) => {
  
  const calculateIncreaseOrDecreaseInDeaths = () => {};

  return (
    <div>
      {
        <Row>
          {/* graphs and tables for displaying the same type of data and can take passed in data for all locations */}
          <Col span={24}>
            {cdcData !== undefined && (
              <Row justify="space-around" align="middle">
                <Col span={12}>
                  <Card>
                    <SimpleStatistic
                      statisticalValue={parseInt(cdcData[cdcData.length - 1].tot_cases)}
                      description={`${location} Total Cases`}
                    />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card>
                    <SimpleStatistic
                      statisticalValue={parseInt(cdcData[cdcData.length - 1].tot_death)}
                      description={`${location} Total Deaths`}
                    />
                  </Card>
                </Col>
              </Row>
            )}
            <Row justify="space-around" align="middle" style={{ marginBottom: '15px'}}>
              <Col span={12}>
                <Card>
                  <Statistic
                    title="New Cases last 24hrs"
                    value={cdcData[cdcData.length - 1].new_case}
                    precision={0}
                    valueStyle={{ color: "#3f8600" }}
                    prefix={<ArrowUpOutlined />}
                    // suffix="%"
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card>
                  <Statistic
                    title="New Deaths last 24hrs"
                    value={cdcData[cdcData.length - 1].new_death}
                    precision={0}
                    // valueStyle={{ color: '#cf1322' }}
                    valueStyle={{ color: "#3f8600" }}
                    // prefix={<ArrowDownOutlined />}
                    prefix={<ArrowUpOutlined />}
                    // suffix="%"
                  />
                </Card>
              </Col>
            </Row>
          </Col>
          <Row justify={'center'}>
              <TableLastThirtyDays cdcData={cdcData} />
          </Row>
          <Row>
              <CasesAndDeathsLineChart cdcData={cdcData} />
          </Row>
          <Row>
          </Row>
        </Row>
      }
    </div>
  );
};

export default DataMatrix;
