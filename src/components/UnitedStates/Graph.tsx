import React, { useEffect, useState } from "react";
import {
    VictoryAxis,
  VictoryChart,
  VictoryLine,
} from "victory";
import { IUsaLastThirstyDays } from "../../interfaces/UnitedStatesInterfaces";

interface IGraph {
    
    x: string,
    y: number
    
}


const Graph: React.FC<{ lastThirtyDaysUsa: IUsaLastThirstyDays | undefined | null }> = ({ lastThirtyDaysUsa }) => {
  const [graphData, setGraphData] = useState<IGraph[]>();
  const [xAxis, setXAxis] = useState<string[]>();

    
    useEffect(() => {
        const formatStateDataIntoGraph = (data: IUsaLastThirstyDays) => {
            let deaths = Object.entries(data.timeline.deaths);
            let cases = Object.entries(data.timeline.cases);
            let recovered = Object.entries(data.timeline.recovered);
            console.log("deaths: ", deaths)
            var graph: IGraph[] = [];
            var plotData: IGraph[] = [];
        
            deaths.forEach((death, i)=> {
                // search for the largest value and replace
                let dataXY = {
                    x: death[0],
                    y: death[1]
                }
                plotData.push(dataXY);
            });
            console.log("plot data: ", plotData);
            setGraphData(plotData);

            const xData = tickFormatter(plotData);
            setXAxis(xData);
            console.log("ticks: ", xData);
        }
        if (lastThirtyDaysUsa != null){
            formatStateDataIntoGraph(lastThirtyDaysUsa);
        }
        if (graphData != null && graphData != undefined){
            const xData = tickFormatter(graphData);
            setXAxis(xData);
            console.log("ticks: ", xAxis);
        }

      }, [lastThirtyDaysUsa]);

const tickFormatter = (graphData: IGraph[]): string[] => {

    let delta = Math.floor(graphData.length / 5);
    let dateTicks: string[] = [];

    for (let i = 0; i < graphData.length; i = i + delta) {
        dateTicks.push(graphData[i].x)
    }
    
    return dateTicks;
    
}

  return (
      
    <div className="App">
        <h1>Deaths Total Last 30 Days</h1>
      <VictoryChart height={500} width={900}>
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc" },
          }}
          data={graphData}
        />
        <VictoryAxis 
            dependentAxis={true}
        />
        <VictoryAxis 
            tickFormat={xAxis}
            tickCount={xAxis?.length}
          />
        
      </VictoryChart>
    </div>
  );
};

export default Graph;
