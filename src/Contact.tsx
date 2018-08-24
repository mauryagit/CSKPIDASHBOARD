import * as React from "react";

interface Props {
  contactus: string;
}

export class Contact extends React.Component<Props> {
  render() {
    return (
      <div>
        <p>You can get in touch with {this.props.contactus}</p>
      </div>
    );
  }
}
