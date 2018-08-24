import * as React from "react";

interface Props {
  title: string;
  description: string;
}

export class Home extends React.Component<Props> {
  render() {
    return (
      <div>
        <h1> Title : {this.props.title} </h1>
        <p>Description : {this.props.description}</p>
      </div>
    );
  }
}
