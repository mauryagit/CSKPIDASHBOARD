import { ILocation } from "./MockData";

export interface IDataProvider {
  getLocations(): Promise<ILocation[]>;
  addLocation(item: string): Promise<ILocation[]>;
}
