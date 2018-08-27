import * as React from "react";
import { OperationList } from "./OperationList";
import { Operationarea, IOperationarea } from "../Services/OperationArea";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "left"
};
interface IOperationArea extends IOperationarea {}
export class AddOperationArea extends React.Component<IOperationArea> {
  private t: Operationarea;
  private oldoperationvalue: any;
  constructor(props: IOperationArea) {
    super(props);
    this.t = new Operationarea();
    const items = this.t.operationarea;
    this.state = {
      items: items,
      newItem: {
        ID: "",
        Title: "",
        Order: ""
      },
      command: "submit"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  render() {
    const isActive = this.validate();
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <p className="h4 mb-4">Add Operation Area</p>
          <div className="form-group" style={styles}>
            <label htmlFor="operationareatitle">
              Enter Opertaion Area Title
            </label>
            <input
              type="text"
              id="operationareatitle"
              name="operationareatitle"
              className="form-control mb-4"
              placeholder="Required"
              value={this.state.newItem.Title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group" style={styles}>
            <label htmlFor="operationareatitleorder">Enter Sequence</label>
            <input
              type="text"
              id="operationareatitleorder"
              name="operationareatitleorder"
              className="form-control mb-4"
              pattern="[0-9]*"
              placeholder="Only Number Allowed"
              value={this.state.newItem.Order}
              onChange={this.handleChange}
            />
          </div>
          <button
            className="btn btn-info  btn-block "
            disabled={!isActive}
            type="submit"
            data-command={this.state.command}
          >
            Save
          </button>
          <hr />
          <OperationList
            items={this.state.items}
            edit={this.handleEdit}
            delete={this.handleDelete}
          />
        </form>
      </div>
    );
  }

  handleEdit(e: any): void {
    debugger;
    this.oldoperationvalue = e;
    this.setState({ newItem: e });
    this.state.command = "update";
  }
  handleDelete(e: any): void {
    this.t.deleteOperationArea(e);
    this.loadItems();
  }
  loadItems() {
    let items: any[] = this.t.operationarea;
    this.setState({ items: items });
  }
  handleSubmit(e: any): void {
    e.preventDefault();
    e.preventDefault();
    let commandvalue: string = this.state.command;
    switch (commandvalue) {
      case "submit":
        this.addOperationArea();
        break;
      case "update":
        this.updateOperationArea();
        break;
    }
    this.loadItems();
    this.resetControl();
  }
  addOperationArea(): void {
    this.t.addOperationArea(this.state.newItem);
  }
  updateOperationArea(): void {
    debugger;
    let previousitemvalue: any = this.oldoperationvalue;
    let udpateoperationvalue: any = {
      ID: previousitemvalue["ID"],
      Title: this.state.newItem.Title,
      Order: this.state.newItem.Order
    };
    this.t.updateOperationArea(previousitemvalue, udpateoperationvalue);
  }
  resetControl() {
    this.setState({
      newItem: {
        ID: "",
        Title: "",
        Order: ""
      },
      command: "submit"
    });
  }

  handleChange(e: any) {
    var val = e.target.value;
    switch (e.target.id) {
      case "operationareatitle":
        this.setState(prevState => ({
          newItem: {
            Title: val,
            Order: prevState.newItem.Order
          }
        }));
        break;
      case "operationareatitleorder":
        debugger;
        if (!e.target.validity.valid) {
          this.setState(prevState => ({
            newItem: {
              Title: prevState.newItem.Title,
              Order: ""
            }
          }));
        } else {
          this.setState(prevState => ({
            newItem: {
              Title: prevState.newItem.Title,
              Order: val
            }
          }));
        }
        break;
    }
  }

  validate() {
    let returnval: string = "";
    let title = this.state.newItem.Title;
    let order = this.state.newItem.Order;
    if (this.checkRequired(title)) {
      if (this.checkRequired(order)) {
        returnval = "true";
      }
    }
    return returnval;
  }
  checkRequired(val: string) {
    return val.length > 0;
  }
}
