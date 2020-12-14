import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { IRawStatesData, IRawUSCityData } from '../../interfaces/UnitedStatesInterfaces'

interface ICityColumnData {
    city: string,
    casesToday: number
}

const CitiesStatsColumn: React.FC<{ cityData: IRawUSCityData[] }> = ({ cityData }) => {

    const [cityColumnData, setCityColumnData] = useState<ICityColumnData[]>([]);

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

    const formatCityColumnData = (data: IRawUSCityData[]) => {

      let columnData: ICityColumnData[] = [];

      data.forEach((state, index) => {
          let newState = {
              city: state.city,
              casesToday: state.todayCases
          }
          columnData.push(newState);
      });

      setCityColumnData(columnData);
    }


  useEffect(() => {
      
      if (cityData != null){
        formatCityColumnData(cityData);
      }


    }, [cityData]);


  return (
      <div>
          { cityColumnData && 
          <Table 
              columns={columns} 
              dataSource={cityColumnData} 
              pagination={{ total: 10, hideOnSinglePage: true }} 
              bordered={true}
              showHeader={true}
          /> }

      </div>
  )
}

export default CitiesStatsColumn
