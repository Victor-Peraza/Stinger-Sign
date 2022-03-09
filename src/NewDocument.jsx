import React, { Component } from "react";
import { withRouter } from "react-router";

class upDocument extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          Back
        </button>
        <h3>Upload Document</h3>
      </div>
    );
  }
}

export default withRouter(upDocument);
