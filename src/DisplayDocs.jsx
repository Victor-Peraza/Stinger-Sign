import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class DisplayDocs extends Component {
  render() {
    const { match } = this.props;
    return (
      <Fragment>
        <button>
          <Link to={`${match.path}/new`}>Documents</Link>
        </button>
      </Fragment>
    );
  }
}

export default DisplayDocs;
