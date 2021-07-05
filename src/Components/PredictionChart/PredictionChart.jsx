import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceDot } from 'recharts';

const DEFAULT_ACTUAL_DATA = {
  name: 'actual',
  data: []
}

const DEFAULT_PREDICTION_DATA = {
  name: 'prediction',
  data: []
}

function PredictionChart({
  actual = DEFAULT_ACTUAL_DATA,
  prediction = DEFAULT_PREDICTION_DATA,
  referenceDotX = 0,
  referenceDotY = 0
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" type="category" allowDuplicatedCategory={false} />
        <YAxis dataKey="value" domain={['dataMin', 'dataMax']} />
        <Tooltip />
        <Legend />
        <Line dataKey="value" data={actual.data} name={actual.name} key={actual.name} />
        <Line stroke="green" strokeDasharray="4 1 2" dataKey="value" data={prediction.data} name={prediction.name} key={prediction.name} />
        <ReferenceDot fill="red" r={5} x={referenceDotX} y={referenceDotY} label={'Offset'} />
      </LineChart>
    </ResponsiveContainer>
  )
};


export default PredictionChart;

