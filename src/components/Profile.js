import React, { Component } from 'react';
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
    return (
      <div>
        <h2>This is the Profile Page</h2>
        <Profile />
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(ProfilePages)