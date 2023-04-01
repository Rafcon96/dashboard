import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({data,mobileDisplay}) {
  return (
    <ResponsiveContainer width="100%"  aspect={mobileDisplay ? 2 : 3}>
    <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="1" horizontal='true' vertical=''/>
        <XAxis dataKey="name"  />
        <YAxis domain={[-30, 1000]} allowDataOverflow={true} scale="linear"/>
        <Tooltip />
        <Area type="monotone"  dataKey="uv" stroke="#568CF3" fill="#8884d8"
              dot={{ stroke: '#568CF3', strokeWidth: 1, r: 4,strokeDasharray:''}} />
        <Area type="monotone" dataKey="pv" stroke="red" fill="rgba(255, 0, 0, 0.0)"
              dot={{ stroke: 'red', strokeWidth: 1, r: 4,strokeDasharray:'',fill:"red"}}/>
      </AreaChart>
    </ResponsiveContainer>
  )
}
