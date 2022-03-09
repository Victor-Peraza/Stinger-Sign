import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import upDocs from "./NewDocument";
import DisplayDocs from "./DisplayDocs";
import NotFound from "./404";
import { withRouter } from "react-router";

class Master extends Component {
  render() {
    const { match } = this.props;
    return (
      <Fragment>
        <h2>Documents</h2>
        <div className="container">
          <Switch>
            <Route path={`${match.path}/new`} component={upDocs} />
            <Route exact path={`${match.path}`} component={DisplayDocs} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(Master);
