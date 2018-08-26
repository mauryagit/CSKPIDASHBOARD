import * as React from "react";
import { IDataProvider } from "../Services/IDataProvider";

interface ILocationList extends IDataProvider {
  onEdit: string;
  items: any[];
}
export class LocationList extends React.Component<ILocationList> {
  constructor(props: IDataProvider) {
    super(props);
    this.state = { locationitems: this.props.items };
    this.onEdit = this.onEdit.bind(this);
  }

  componentDidMount() {}
  onEdit(e: string) {
    this.props.onEdit(e);
  }
  render() {
    var $this = this;
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
            {this.state.locationitems.map(function(item, index) {
              return (
                <Locationrow key={item.ID} row={item} edit={$this.onEdit} />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

interface rowDetails extends ILocationList {
  row: any;
  edit: any;
  //delete: any[];
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
    let item = this.props.row;
    return (
      <tr key={item.ID}>
        <td id="name">{item.Title}</td>
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
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.handleDelete}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
