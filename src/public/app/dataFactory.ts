import { Observable, Observer } from "rxjs";
import * as io from "socket.io-client";

const socket = io("localhost:3000");

interface IRawServerData {
  value: number;
  timestamp: number;
}

export type ChartData = [Date, number];

export interface IDataFactory {
  data: Observable<ChartData>;
}

export const createDataFactory = (): IDataFactory => ({
  data: Observable.create((observer: Observer<ChartData>) =>
    socket.on("data", (data: IRawServerData) =>
      observer.next([
        new Date(data.timestamp),
        data.value
      ])
    )
  )
});
