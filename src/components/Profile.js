import React, { Component } from 'react';
import { withRouter, } from 'react-router-dom';
import { db } from '../firebase';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState({ users: snapshot.val() })
    );
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h2>This is the Profile Page</h2>
        { !!users && <UserList users={users} /> }
      </div>
    );
  }
}

const UserList = ({ users }) =>
  <div>
  <div style={{ backgroundColor: "#66DAC7", width: "100%", minHeight: "200px"}}></div>
    {/* { <h1>SignIn</h1> } */}
    <h1 style={{ padding: "10px 20px", textAlign: "center", color: "Purple  "}}>Profile </h1>

    <h2>List of Usernames of Users</h2>
    
    {console.log(users)}
    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </div>

export default withRouter(Profile);