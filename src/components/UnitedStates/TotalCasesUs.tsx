import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { subDays, format } from 'date-fns';
import { ICdcData } from '../../interfaces/UnitedStatesInterfaces';
import SimpleStatistic from '../Home/SimpleStatistic';
import { Card } from 'antd';

interface ITotalCases {
    totalCases: number,
    totalDeaths: number,
    totalRecovered: number,
    active: number
}

const TotalCasesUs: React.FC<{ totalUsData: ICdcData[] | undefined}> = ({ totalUsData }) => {

    const [totalStats, setTotalStats] = useState<ITotalCases>();
    const [loading, setLoading] = useState(true);

    const getTotalStats = async () => {

    }
    useEffect(() => {
        console.log("dcd data: ", totalUsData);
        if (totalStats) return;

        if (totalUsData){
            getTotalCases(totalUsData);
        }

    }, [totalUsData])

    const getTotalCases = async (stats: ICdcData[]) => {

        let cases: ITotalCases =  {totalCases: 0, totalDeaths: 0, totalRecovered: 0, active: 0};

        if (stats === undefined) return cases;

        for (let i = 0; i < stats.length; i++) {
            cases.totalCases += parseInt(stats[i].tot_cases);
            //console.log("total cases: ", cases.totalCases);
            cases.totalDeaths += parseInt(stats[i].tot_death);
            //console.log("total deaths: ", cases.totalDeaths);

            // cases.totalRecovered += parseInt(state.);
            // cases.active += parseInt(state.new_death);
        };
        setTotalStats(cases);
        setLoading(false);
    }

    return (
        <div>
            <div>
                <Card title="Totals as of Yesterday" loading={loading}>
                    { !loading &&
                        <div>
                            <SimpleStatistic statisticalValue={totalStats!.totalCases} description={"Total Cases"}/>
                            <SimpleStatistic statisticalValue={totalStats!.totalDeaths} description={"Total Deaths"}/>
                            {/* <SimpleStatistic statisticalValue={totalStats!.totalRecovered} description={"Total Recovered"}/>
                            <SimpleStatistic statisticalValue={totalStats!.active} description={"Total Active"}/> */}
                        </div>
                    }
                </Card>
            </div>
        </div>
    )
}

export default TotalCasesUs

