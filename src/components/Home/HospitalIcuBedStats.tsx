import React, { useEffect, useState } from "react";
import { ICovidActNow } from "../../interfaces/CovidActNowInterfaces";
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
  PieChart,
  Pie,
  Sector,
  Cell,Label
} from "recharts";
import { Card } from "antd";

interface IProps {
  covidActNowData: ICovidActNow | undefined;
}
const icuBeds = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 }
];
const hosipitalBeds = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = (
//     { cy, midAngle, innerRadius, outerRadius, percent, cx, name }: 
//     { cy?: any; midAngle?: any; innerRadius?: any; outerRadius?: any; percent?: any; cx?: any; name?: any}
// ) => {
//    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
//       {`${name} - ${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// }

const getPieChartData = (covidStateData: ICovidActNow): IPieProps[] => {
    console.log('pie data: ', covidStateData);

    var total = covidStateData.actuals.hospitalBeds.capacity;
    let occupied = covidStateData.actuals.hospitalBeds.currentUsageCovid;

    return [{name: "Total", value: total}, {name: "Occupied", value: occupied}];

}

type IPieProps = {
    name: string,
    value: number
}
type IPieLabelProps = {
    total: number,
    occupied: number
}
const HospitalIcuBedStats: React.FC<IProps> = ({ covidActNowData }) => {

    const [pieData, setPieData] = useState<IPieProps[]>();
    const [pieLabel, setPieLabel] = useState<IPieLabelProps>();

    useEffect(() => {
        if (covidActNowData !== undefined || covidActNowData !== null){
            let data = getPieChartData(covidActNowData!);
            setPieData(data);
            setPieLabel({total: data[0].value, occupied: data[1].value})
            console.log('pie data inside: ', data);
        }
    }, [covidActNowData])

  return (
    <div>
      <h1>Covid Act Now Data</h1>
      <Card>
          
            <PieChart width={400} height={400}>
          <Pie
            data={pieData}
            dataKey="value"
            cx={200}
            cy={200}
            innerRadius={90}
            outerRadius={120}
            fill="#82ca9d"
            labelLine={false}
          >
              {
                  pieLabel !== undefined &&
                <>
            <Label 
            value={pieLabel!.occupied} position="centerBottom"  className='label-top' fontSize='23px'
            />
            <Label 
            value={`of ${pieLabel!.total} occupied`} position="centerTop" className='label' fontSize='18px'
            /> 
                </>
              }

            {
                hosipitalBeds.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
            }
          </Pie>
        </PieChart>
      </Card>
    </div>
  );
};

export default HospitalIcuBedStats;
