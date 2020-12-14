import React, { useCallback, useEffect, useState } from "react";
import { Table } from "antd";
import { toDate, format } from "date-fns";
import { IFormattedStatesData, IRawStatesData } from "../../interfaces/UnitedStatesInterfaces";

const columns = [
  {
    title: "State",
    dataIndex: "state",
    key: "state",
    sorter: (a: any, b: any) => a.state.localeCompare(b.state),
  },
  {
    title: "Total Cases",
    dataIndex: "cases",
    key: "cases",
    sorter: {
        compare: (a:any, b:any) => parseInt(a.cases) - parseInt(b.cases),
    }
  },
  {
    title: "Today Cases",
    dataIndex: "todayCases",
    key: "todayCases",
    sorter: {
        compare: (a:any, b:any) => parseInt(a.todayCases) - parseInt(b.todayCases),
    }
  },
  {
    title: "Total Deaths",
    dataIndex: "deaths",
    key: "deaths",
    sorter: {
        compare: (a:any, b:any) => parseInt(a.deaths) - parseInt(b.deaths),
    }
  },
  {
    title: "Today Deaths",
    dataIndex: "todayDeaths",
    key: "todayDeaths",
    sorter: {
        compare: (a:any, b:any) => parseInt(a.todayDeaths) - parseInt(b.todayDeaths),
    }
  },
  {
    title: "Recovered",
    dataIndex: "recovered",
    key: "recovered",
    sorter: {
        compare: (a:any, b:any) => parseInt(a.recovered) - parseInt(b.recovered),
    }
  },
  {
    title: "Active",
    dataIndex: "active",
    key: "active",
    sorter: {
        compare: (a:any, b:any) => parseInt(a.active) - parseInt(b.active),
    }
  },
  {
    title: "Tests",
    dataIndex: "tests",
    key: "tests",
    sorter: {
        compare: (a:any, b:any) => parseInt(a.tests) - parseInt(b.tests),
    }
  },
  {
    title: "Last Updated",
    dataIndex: "updated",
    key: "updated",
  },
];

const StatsUnitedStates: React.FC<{ stateData: IRawStatesData[] }> = ({ stateData }) => {
  const [stateDataFormatted, setAndFormatStateData] = useState<any>();


  const formatStateData =  useCallback((statesData: IRawStatesData[]): IFormattedStatesData[] => {
    const numberFormatter = Intl.NumberFormat();
    let formattedStateData: IFormattedStatesData[] = [];

    statesData.forEach((x) => {
      let formatedDate = format(toDate(x.updated), "PPPppp");
      console.log(formatedDate);
      let newItem = {
        state: x.state,
        cases: numberFormatter.format(x.cases),
        todayCases: numberFormatter.format(x.todayCases),
        deaths: numberFormatter.format(x.deaths),
        todayDeaths: numberFormatter.format(x.todayDeaths),
        recovered: numberFormatter.format(x.recovered),
        active: numberFormatter.format(x.active),
        tests: numberFormatter.format(x.tests),
        updated: formatedDate,
      };
      formattedStateData.push(newItem);
    });
    return formattedStateData;
  }, []);

  useEffect(() => {
    
    console.log("passed data: ", stateData);
    if (stateData != null){
      let data = formatStateData(stateData);
      setAndFormatStateData(data);
    }
  }, [formatStateData, stateData]);

  return (
    <div>
        {stateData && <Table columns={columns} dataSource={stateDataFormatted} bordered={true}/>}
    </div>
  );
};

export default StatsUnitedStates;
