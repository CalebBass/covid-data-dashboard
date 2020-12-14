import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import { ICdcData } from '../../interfaces/UnitedStatesInterfaces';
import { format } from 'date-fns';

interface ICdcTableData {
    date: string,
    newCases: string,
    newDeaths: string,
    totalCases: string,
    totalDeaths: string,
    increasePreviousDay: string,
}

const columns = [
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        sorter: {
            // compare: (a: any, b: any) => parseInt(format(new Date(a.date), 'x')) - parseInt(format(new Date(b.date), 'x'))
            compare: (a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime()
        }
    },
    {
        title: 'New Cases',
        dataIndex: 'newCases',
        key: 'newCases',
        sorter: {
            compare: (a:any, b:any) => Number.parseInt(a.newCases.replace(/,/g, '')) - Number.parseInt(b.newCases.replace(/,/g, '')),
        }
    },
    {
        title: 'New Deaths',
        dataIndex: 'newDeaths',
        key: 'newDeaths',
        sorter: {
            compare: (a:any, b:any) => Number.parseInt(a.newDeaths.replace(/,/g, '')) - Number.parseInt(b.newDeaths.replace(/,/g, '')),
        }
    },
    {
        title: 'Total Cases',
        dataIndex: 'totalCases',
        key: 'totalCases',
        sorter: {
            compare: (a:any, b:any) => Number.parseInt(a.totalCases.replace(/,/g, '')) - Number.parseInt(b.totalCases.replace(/,/g, '')),
        }
    },
    {
        title: 'Total Deaths',
        dataIndex: 'totalDeaths',
        key: 'totalDeaths',
        sorter: {
            compare: (a:any, b:any) => Number.parseInt(a.totalDeaths.replace(/,/g, '')) - Number.parseInt(b.totalDeaths.replace(/,/g, '')),
        }
    },
    {
        title: 'New Case Difference from Yesterday',
        dataIndex: 'increasePreviousDay',
        key: 'increasePreviousDay',
        sorter: {
            compare: (a:any, b:any) => parseInt(a.increasePreviousDay.replace(/,/g, '')) - parseInt(b.increasePreviousDay.replace(/,/g, '')),
        }
    },
]


const dataFormater = (cdcData: ICdcData[]) => {

    let formattedStateData: ICdcTableData[] = [];

    for (let i = 0; i < cdcData.length; i++) {
        const newItem = {
            date: format(new Date(cdcData[i].submission_date), 'MM/dd/YYY'),
            newCases: Number.parseInt(cdcData[i].new_case).toLocaleString(),
            newDeaths: Number.parseInt(cdcData[i].new_death).toLocaleString(),
            totalCases: Number.parseInt(cdcData[i].tot_cases).toLocaleString(),
            totalDeaths: Number.parseInt(cdcData[i].tot_death).toLocaleString(),
            increasePreviousDay: i >=1 ? (parseInt(cdcData[i].new_case) - parseInt(cdcData[i-1].new_case)).toLocaleString(): '',
        };
        formattedStateData.push(newItem);
    }
    return formattedStateData;
}

const TableLastThirtyDays: React.FC<{cdcData: ICdcData[]}> = ( {cdcData }) => {

    const [cdcTableData, setCdctableData] = useState<ICdcTableData[]>([]);

    useEffect(() => {

        if (cdcData != null){
            let data = dataFormater(cdcData);
            setCdctableData(data);
          }

    }, [cdcData])
    return (
        <div>
            {cdcTableData && <Table columns={columns} dataSource={cdcTableData} bordered={true} />}
        </div>
    )
}

export default TableLastThirtyDays
