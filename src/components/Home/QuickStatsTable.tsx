import { Table } from 'antd';
import React from 'react'
import { ICdcData } from '../../interfaces/UnitedStatesInterfaces'

interface IProps {
    cdcData: ICdcData | undefined,
    location: string | undefined
}

const columns = [
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'Cases',
      dataIndex: 'cases',
      key: 'cases',
      sorter: {
        compare: (a:any, b:any) => a.cases - b.cases,
      }
    }
  ];

const QuickStatsTable: React.FC<IProps> = ({ cdcData, location }) => {
    return (
        <div>
            <h1>{location} last 24 hours</h1>
            
            {  
            <Table 
                columns={columns} 
                //dataSource={stateColumnData} 
                pagination={{ total: 10, hideOnSinglePage: true }} 
                bordered={true}
                showHeader={true}
            /> }
        </div>
    )
}

export default QuickStatsTable
