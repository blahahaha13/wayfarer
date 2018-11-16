import React, { Component } from 'react';
import { auth, db } from '../firebase';

const UploadPicture = () =>
  <div>
    <h2>Upload your Picture!</h2>
    <UploadPictureForm />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  photoURL: '',
  error: null,
};

class UploadPictureForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { photoURL } = this.state;
    debugger;
    // auth.doUpdatePhoto(photoURL)
    //   .then(photoURL => {
    db.doUploadPicture(photoURL)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
  //     })
  //     .catch(error => {
  //       this.setState(byPropKey('error', error));
  //     });
  }

  render() {
    const {
      photoURL,
      error,
    } = this.state;

    const isInvalid = photoURL === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.photoURL}
          onChange={event => this.setState(byPropKey('photoURL', event.target.value))}
          type="text"
          placeholder="Picture URL"
        />
        <button disabled={isInvalid} type="submit">Upload My Picture</button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default UploadPicture;