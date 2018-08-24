import * as React from "react";
import { LocationList } from "./LocationList.tsx";

interface ILocation {
  title: string;
}

export class AddLocation extends React.Component<ILocation> {
  constructor(props: ILocation) {
    super(props);
    this.state = { locationName: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  handleChange(e: any): void {
    this.setState({ locationName: e.target.value });
  }
  handleSubmit(e: any): void {
    e.preventDefault();
    // console.info(this.state.locationName);
    alert(this.state.locationName);
    //onEdit={this.onEdit} onDelete={this.onDelete}
  }

  onEdit(e: string) {
    this.setState({ locationName: e });
    console.info(this.state.locationName);
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
            onChange={this.handleChange}
          />
          <button className="btn btn-info btn-block" type="submit">
            Save
          </button>
          <hr />
          <LocationList onEdit={this.onEdit} />
        </form>
      </div>
    );
  }
}
