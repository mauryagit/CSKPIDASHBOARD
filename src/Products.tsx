import * as React from "react";

interface Props {
  productList: string[];
}

export class Products extends React.Component<Props> {
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.productList.map(function(val, index) {
            return (
              <li key={index} className="list-group-item">
                {val}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
