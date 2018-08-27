import * as React from "react";
import { LocationList } from "./LocationList";
import { IDataProvider } from "../Services/IDataProvider";
import { MockLocationData } from "../Services/MockData";

interface ILocation extends IDataProvider {
  title: string;
}

export class AddLocation extends React.Component<ILocation> {
  private t: any;
  private oldlocationvalue: any;
  constructor(props: ILocation) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.t = new MockLocationData();
    const items = this.t.locations;
    this.state = {
      items: items,
      locationName: "",
      command: "submit",
      active: ""
    };
  }

  handleChange(e: any): void {
    let input = e.target;
    this.setState({
      locationName: input.value.toUpperCase(),
      active: "true"
    });
  }

  handleSubmit(e: any): void {
    e.preventDefault();
    let commandvalue: string = this.state.command;
    switch (commandvalue) {
      case "submit":
        this.addLocationtoRemote();
        break;
      case "update":
        this.updateLocationRemote();
        break;
    }
    this.loadItems();
    this.resetControl();
  }

  loadItems() {
    let items: any[] = this.t.locations;
    this.setState({ items: items });
  }

  addLocationtoRemote() {
    this.t.addLocation({
      Title: this.state.locationName,
      ID: this.t.locations.length + 1
    });
  }
  updateLocationRemote() {
    let previousLocation: any = this.oldlocationvalue;
    let udpateLocation: any = {
      ID: previousLocation["ID"],
      Title: this.state.locationName
    };
    this.t.updateLocation(previousLocation, udpateLocation);
  }

  resetControl() {
    this.setState({
      locationName: "",
      command: "submit",
      active: ""
    });
  }

  onEdit(e: any) {
    this.oldlocationvalue = e;
    this.setState({ locationName: e["Title"] });
    this.state.command = "update";
  }
  onDelete(e: any[]) {
    this.t.deleteLocation(e);
    this.loadItems();
  }
  render() {
    return (
      <div className="container">
        <form
          className="text-center border border-light p-5"
          onSubmit={this.handleSubmit}
        >
          <p className="h4 mb-4">Add Location</p>
          <input
            type="text"
            id="locationName"
            className="form-control mb-4"
            placeholder="Location Name"
            value={this.state.locationName}
            onChange={this.handleChange}
          />
          <button
            className="btn btn-info btn-block"
            type="submit"
            data-command={this.state.command}
            disabled={!this.state.active}
          >
            Save
          </button>
          <hr />
          <LocationList
            onEdit={this.onEdit}
            items={this.state.items}
            onDelete={this.onDelete}
          />
        </form>
      </div>
    );
  }
}
