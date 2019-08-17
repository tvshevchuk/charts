import * as React from "react";
import { Chart } from "react-google-charts";
import { CircularProgress } from "@material-ui/core";
import { ChartData } from "../dataFactory";
import * as style from './styles.css'

export const LineChartWrapper = ({ dataArray }: { dataArray: ChartData[] }) => {
  const chartData = [[{ type: "date" }, "Value"], ...dataArray];
  return (
  <div className={style.chartContainer}>
    {dataArray.length > 0 ? (
      <Chart
        width={"100%"}
        height={"500"}
        chartType="LineChart"
        data={chartData}
      /> 
      ) : <CircularProgress />
    }
  </div>)
};
