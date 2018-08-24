import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Products } from "./Products";
import { Contact } from "./Contact";
import { AddLocation } from "./Location/AddLocation";

interface Props {
  name: string;
  age: string;
}
export class Hello extends React.Component<Props> {
  render() {
    const des = `Lorem Ipsum is simply dummy text of the printing and typesetting
     industry. Lorem Ipsum has been the industry's standard dummy text ever 
     since the 1500s, when an unknown printer took a galley of type and 
     scrambled it to make a type specimen book. It has survived not only five 
     centuries, but also the leap into electronic typesetting, remaining 
     essentially unchanged. It was popularised in the 1960s with the release 
     of Letraset sheets containing Lorem Ipsum passages, and more recently with
     including versions of Lorem Ipsum.`;
    return (
      <div>
        <h1> {this.props.name}</h1>
        <Switch>
          <Route
            path="/products"
            render={() => <Products productList={["One", "Two", "Three"]} />}
          />
          <Route
            path="/contactus"
            render={() => <Contact contactus="Abc@g.com" />}
          />
          <Route path="/location" render={() => <AddLocation title="a" />} />
          <Route
            path="/"
            render={() => (
              <Home title="Oracle Intergration Management" description={des} />
            )}
          />
        </Switch>
      </div>
    );
  }
}
