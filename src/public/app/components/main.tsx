import * as React from "react";
import { IDataFactory, ChartData } from "../dataFactory";
import { LineChartWrapper } from "./lineChart";
import { BarChartWrapper } from "./barChart";

interface MainProps {
  dataFactory: IDataFactory;
}

export const Main = ({ dataFactory }: MainProps) => {
  // Create component state
  const [dataArray, setDataArray] = React.useState([] as ChartData[]);

  // Subscribe to data source
  const subscription = dataFactory.data.subscribe(data => {
    setDataArray([...dataArray, data]);
  });

  // Unsubscribe from data source after the unmounting
  React.useEffect(() => () => subscription.unsubscribe());

  return (
  <>
    <LineChartWrapper dataArray={dataArray} />
    <BarChartWrapper dataArray={dataArray} />
  </>)
};
