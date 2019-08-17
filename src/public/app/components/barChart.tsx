import * as React from 'react';
import Chart from 'react-google-charts';
import { ChartData } from '../dataFactory';

const getTuples = (min: number, max: number): [number, number][] => {
    const res: [number, number][] = [];
    while (min < max) {
        res.push([min, min + 10]);
        min += 10;
    }
    return res;
}

export const BarChartWrapper = ({ dataArray }: { dataArray: ChartData[] }) => {
    const data = getTuples(-100, 100)
        .map(([x, y]) => [
            `${x} : ${y}`,
            dataArray.filter(d => d[1] >= x && d[1] < y).length 
        ])
    return <Chart chartType="Bar" data={[
        ['Ranges', 'Value'],
        ...data
      ]} />
}