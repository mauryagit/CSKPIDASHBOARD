import * as React from "react";
import { LocationList } from "./LocationList";
import { IDataProvider } from "../Services/IDataProvider";
import { MockLocationData } from "../Services/MockData";

interface ILocation extends IDataProvider {
  title: string;
}

export class AddLocation extends React.Component<ILocation> {
  constructor(props: ILocation) {
    super(props);
    this.state = { locationName: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onEdit = this.onEdit.bind(this);

    var t = new MockLocationData();
    this.state = { obj: t };
    const items = t.locations; //t.getLocation().d.results;
    this.state = { items: items };
  }

  handleChange(e: any): void {
    this.setState({ locationName: e.target.value });
  }
  handleSubmit(e: any): void {
    e.preventDefault();
    //alert(this.state.locationName);
    var t: MockLocationData = this.state.obj;
    t.addLocation({ Title: this.state.locationName, ID: t.locations.length });
    let items: any[] = t.locations;
    // items.push({ID: items.length , Title: this.state.locationName});
    this.setState({ items: items });
    //this.props.addLocation(this.state.locationName);
  }

  onEdit(e: string) {
    this.setState({ locationName: e });
    //this.props.addLocation(e);
  }
  onDelete(e: string) {
    alert(e);
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
          <button className="btn btn-info btn-block" type="submit">
            Save
          </button>
          <hr />
          <LocationList onEdit={this.onEdit} items={this.state.items} />
        </form>
      </div>
    );
  }
}
