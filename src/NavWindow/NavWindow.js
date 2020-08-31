import React from "react";

export default class NavWindow extends React.Component {
  render() {
    return (
      <nav className="light window unselected">
        <h2 className="dark">Nav / Summary</h2>
        <div className="light window">
          <h3>WelcomeL Guest!</h3>

          <form className="login">
            <label htmlFor="name">User:</label>
            <input type="text" id="name" name="name" />
            <br />
            <br />
            <label htmlFor="Type:">PW:</label>
            <input type="text" id="Type:" name="Type:" />
            <br />
            <br />
          </form>
        </div>
        <div className="dark window">Strategy Philosophy Overview</div>
        <div className="light window">Total Projected 1yr</div>
        <div className="light window">Total Projected 5yr</div>
        <div className="graph dark window">
          <h2 className="dark">Expected Earnings</h2>
          <img
            src="https://ak.picdn.net/shutterstock/videos/15215122/thumb/7.jpg"
            alt="fakegraph"
            width="80%"
          />
        </div>
      </nav>
    );
  }
}
