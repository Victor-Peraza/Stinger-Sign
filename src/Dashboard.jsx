import React, { Component } from "react";
import { Redirect, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./Dashboard.css";
import Master from "./Documents";
import Pos from "./SamplePage";
import DashboardDisplay from "./DashboardDisplay";
import NotFound from "./404";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
  }
  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };
  render() {
    if (this.state.islogout) {
      return <Redirect to="/login" />;
    }
    const { match } = this.props;
    return (
      <div>
        <ul>
          <li>
            <Link to={`${match.path}`}>Dashboard</Link>
          </li>
          <li>
            <Link to={`${match.path}/documents`}>Documents</Link>
          </li>
          <li>
            <Link to={`${match.path}/sample`}>Blank Page</Link>
          </li>
          <li className="push-right">
            <button onClick={this.signOut} href="#">
              Sign Out
            </button>
          </li>
        </ul>
            <Switch>
              <Route path={`${match.path}/documents`}>
                <Master />
              </Route>
              <Route path={`${match.path}/sample`}>
                <Pos />
              </Route>
              <Route exact path={`${match.path}`}>
                <DashboardDisplay />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
    );
  }
}

export default withRouter(Dashboard);
