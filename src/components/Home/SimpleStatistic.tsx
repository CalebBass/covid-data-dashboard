import React from 'react'
import { Statistic } from 'antd';

const SimpleStatistic: React.FC<{ statisticalValue: number, description: string }> = ({ statisticalValue, description }) => {
    return (
        <div>
            <Statistic title={description} value={statisticalValue} />
        </div>
    )
}

export default SimpleStatistic
