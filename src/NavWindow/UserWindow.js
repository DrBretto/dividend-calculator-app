import React from 'react'

export default class UserWindow extends React.Component {


  render() {
      return (
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
      );
  }
}