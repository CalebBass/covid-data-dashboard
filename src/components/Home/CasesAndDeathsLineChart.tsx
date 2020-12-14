import { format } from "date-fns";
import React from "react";
import {
    BarChart,
    Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ICdcData } from "../../interfaces/UnitedStatesInterfaces";

interface ITwoDataPointGraph {
    date: string,
    cases: number | null,
    deaths: number | null,
    amount: number
}

const formatGraphData = (cdcData: ICdcData[]): ITwoDataPointGraph[] => {

    let graphData: ITwoDataPointGraph[] = [];
    cdcData.forEach(date => {
        let dateData: ITwoDataPointGraph = {
            date: format(new Date(date.submission_date), 'MM/dd/YYY'),
            cases: Number.parseInt(date.new_case) === 0 ? null: Number.parseInt(date.new_case),
            deaths: Number.parseInt(date.new_death) === 0 ? null: Number.parseInt(date.new_death),
            amount: 0
        }
        graphData.push(dateData);
    })
    return graphData;
}

export const CasesAndDeathsLineChart: React.FC<{cdcData: ICdcData[]}> = ({ cdcData }) => {
  return (
    <div>
      <BarChart
        width={1200}
        height={600}
        data={formatGraphData(cdcData)}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid/>
        <Tooltip />
        <Legend />
        <Bar dataKey="cases" stackId="a" fill="#8884d8" />
       <Bar dataKey="deaths" stackId="a" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};
