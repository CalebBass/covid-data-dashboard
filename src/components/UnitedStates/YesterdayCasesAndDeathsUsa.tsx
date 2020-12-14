import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { subDays, format } from 'date-fns';
import { ICdcData } from '../../interfaces/UnitedStatesInterfaces';
import SimpleStatistic from '../Home/SimpleStatistic';
import { Card } from 'antd';

interface IYesterdayStats {
    yesterdayCases: number,
    yesterdayDeaths: number
}

const YesterdayCasesAndDeathsUsa = () => {

    const [dailyUsStats, setDailyUsStats] = useState<IYesterdayStats>();
    const [loading, setLoading] = useState(true);

    let yesterdayCases: number = 0;
    let yesterdayDeaths: number = 0;
    let yesterday = format(subDays(new Date(), 2), 'yyyy-MM-dd');

    const getDailyUsStats = async () => {
        try{
            const response = await axios.get<ICdcData[]>(`https://data.cdc.gov/resource/9mfq-cb36.json?submission_date=${yesterday}T00:00:00.000`);
            var data = getYesterdaysStats(response.data)
            console.log("cdc data: ", response.data);
            setDailyUsStats(data);
        } catch {

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (dailyUsStats) return;
        getDailyUsStats();

    }, [])

    const getYesterdaysStats = (stats: ICdcData[]): IYesterdayStats => {
        let cases: IYesterdayStats =  {yesterdayCases: 0, yesterdayDeaths: 0};

        if (stats === undefined) return cases;

        stats.forEach(state => {
            yesterdayCases += parseInt(state.new_case);
            yesterdayDeaths += parseInt(state.new_death);
        })
        cases.yesterdayCases = yesterdayCases;
        cases.yesterdayDeaths = yesterdayDeaths;

        return cases;
    }

    return (
        <div>
            <div>
                <Card title="Yesterday" loading={loading}>
                    { !loading &&
                        <div>
                            <SimpleStatistic statisticalValue={dailyUsStats!.yesterdayCases} description={"New Cases"}/>
                            <SimpleStatistic statisticalValue={dailyUsStats!.yesterdayDeaths} description={"New Deaths"}/>
                        </div>
                    }
                </Card>
            </div>
        </div>
    )
}

export default YesterdayCasesAndDeathsUsa

