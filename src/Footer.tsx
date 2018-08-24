import * as React from "react";

export class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">
          © 2018 Copyright:
          <a href="http://exploitsp.blogspot.com" target="_blank">
            {" "}
            ME
          </a>
        </div>
      </footer>
    );
  }
}
