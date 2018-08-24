import * as React from "react";
import { IDataProvider } from "../Services/IDataProvider";
import { MockLocationData } from "../Services/MockData";

export class LocationList extends React.Component<IDataProvider> {
  constructor(props: IDataProvider) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    var t = new MockLocationData();
    const items = t.getLocation().d.results;
    this.setState({ items: items });
  }
  onEdit(e: string) {
    alert(e);
  }
  render() {
    return (
      <div className="container">
        <h2>Location Details</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <Locationrow rows={this.state.items} edit={this.onEdit} />
          </tbody>
        </table>
      </div>
    );
  }
}

interface rowDetails {
  rows: string[];
  edit: string;
}

class Locationrow extends React.Component<rowDetails> {
  constructor(props: rowDetails) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    //  this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit(e: string) {
    //this.props.edit(e.target.value);
    console.log("");
  }

  render() {
    return this.props.rows.map(function(value, index) {
      return (
        <tr key={value.ID}>
          <td>{value.Title}</td>
          <td>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleEdit}
            >
              Edit
            </button>
          </td>
          <td>
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }
}
