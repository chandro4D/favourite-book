import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
    {
        name: 'Pride and Prejudice',
        uv: 400,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'The Hobbit',
        uv: 300,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'The Catcher in the Rye',
        uv: 200,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'George Orwell',
        uv: 280,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'George Orwell',
        uv: 390,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'George Orwell',
        uv: 290,
        pv: 3800,
        amt: 2500,
    },
   
];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App() {
    return (
        <div className='ml-[150px] mt-[70px]'>
            <BarChart
                width={1200}
                height={500}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
}

App.demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-shape-dusth';
