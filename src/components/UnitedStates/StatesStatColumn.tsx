import React, { useEffect, useState } from 'react'
import { IRawStatesData } from "../../interfaces/UnitedStatesInterfaces";
import { Table } from 'antd';

interface IStateStatColumn {
    state: string,
    cases: number
}

const StatesStatColumn: React.FC<{ stateData: IRawStatesData[] }> = ({ stateData }) => {

    const [stateColumnData, setStateColumnData] = useState<IStateStatColumn[]>([]);

      const columns = [
        {
          title: 'State',
          dataIndex: 'state',
          key: 'state',
          sorter: (a: any, b: any) => a.state.localeCompare(b.state),
        },
        {
          title: 'Total Cases',
          dataIndex: 'cases',
          key: 'cases',
          sorter: {
            compare: (a:any, b:any) => a.cases - b.cases,
          }
        }
      ];

      const formatStateColumnData = (data: IRawStatesData[]) => {

        let columnData: IStateStatColumn[] = [];

        data.forEach((state, index) => {
            let newState = {
                state: state.state,
                cases: state.cases
            }
            columnData.push(newState);
        });

        setStateColumnData(columnData);
      }


    useEffect(() => {
        
        if (stateData != null){
            formatStateColumnData(stateData);
        }


      }, [stateData]);


    return (
        <div>
            { stateColumnData && 
            <Table 
                columns={columns} 
                dataSource={stateColumnData} 
                pagination={{ total: 10, hideOnSinglePage: true }} 
                bordered={true}
                showHeader={true}
            /> }

        </div>
    )
}

export default StatesStatColumn
