import * as React from "react";
import { IDataProvider } from "../Services/IDataProvider";

interface ILocationList extends IDataProvider {
  onEdit: string;
  items: any[];
}
export class LocationList extends React.Component<ILocationList> {
  constructor(props: IDataProvider) {
    super(props);
    // this.state = { items: [] };
    this.onEdit = this.onEdit.bind(this);
  }

  componentDidMount() {}
  onEdit(e: string) {
    this.props.onEdit(e);
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
            <Locationrow rows={this.props.items} edit={this.onEdit} />
          </tbody>
        </table>
      </div>
    );
  }
}

interface rowDetails {
  rows: any[];
  edit: string;
}

class Locationrow extends React.Component<rowDetails> {
  constructor(props: rowDetails) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete(e: any): void {
    e.preventDefault();
  }

  handleEdit(e: any): void {
    e.preventDefault();
    let name = e.target.parentNode.parentElement.firstChild.textContent;
    // console.log(name);
    this.props.edit(name);
  }

  render() {
    let this1 = this;
    return this.props.rows.map(function(value, index) {
      return (
        <tr key={value.ID}>
          <td id="name">{value.Title}</td>
          <td>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this1.handleEdit}
            >
              Edit
            </button>
          </td>
          <td>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this1.handleDelete}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }
}
