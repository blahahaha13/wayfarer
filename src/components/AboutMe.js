import React, { Component } from 'react';
import AuthUserContext from './AuthUserContext';
import { db } from '../firebase';

const INITIAL_STATE = {
  editing: false
}

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;

    // this.userRef = db.ref().on(`users/${id}`);
    // this.userRef.on("value", snap => {
    //   let user = snap.val();
		// 	if(user.aboutMe){
		// 		this.setState({aboutMe: user.aboutMe});
		// 	}else{
		// 		this.setState({aboutMe: ""});
		// 	}
    // });
  }

  componentWillUnmount = () => {
		this.userRef.off();
	}

  handleClickEdit = () => {
		this.setState({editing: true});
  }
  
  handleClickSave = () => {
		this.setState({editing: false});
		let newAboutMe = this.refs.newAboutMe.value;
    this.userRef.once("value", snap => {
      let user = snap.val();
		  let userInfo = {};
      for(let i in user){
        userInfo[i] = user[i];
      }
		  userInfo.aboutMe = newAboutMe;
		  let updates = {};
		  updates['users/' + this.props.pageID] = userInfo;
		  db.ref().update(updates);
    });

    this.setState({aboutMe: newAboutMe});
  }

  render() {
    // const EditButton = () =>
    //   <button onClick={this.handleClickEdit}><span title="Edit About Me"></span></button>
    return (
      <div>
        <h4>About <button onClick={this.handleClickEdit}>Edit About Me</button></h4>
        <pre>{this.state.aboutMe}</pre>
        <hr></hr>
      </div>

      // <AuthUserContext.Consumer>
      //   {authUser => authUser
      //     ? <DefaultAboutMe />
      //     : <EditingAboutMe /> 
      //   }
      // </AuthUserContext.Consumer>
    )
  } 

}

// const EditButton = () =>
//   <button onClick={this.handleClickEdit}><span title="Edit About Me"></span></button>

// const EditButton = () =>
//   <AuthUserContext.Consumer>
//     {authUser => authUser
//       ? <button onClick={this.handleClickEdit}><span title="Edit About Me"></span></button>
//       : <div></div> 
//     }
//   </AuthUserContext.Consumer>

// const DefaultAboutMe = () => 
  // <div>
  //   <h4>About {EditButton}</h4>
  //   <pre>{this.state.aboutMe}</pre>
  //   <hr></hr>
  // </div>


// const EditingAboutMe = () => {
//   return(
//     <div>
//       <h4>About</h4>
//       <textarea className="form-control" rows="6" style={{width: '100%'}} ref="newSummary" defaultValue={this.state.aboutMe} />
//       <center>
//         <div className="btn btn-toolbar">
//           <button className="btn btn-primary" onClick={this.handleClickSave}>Save</button>
//           <button className="btn btn-default" onClick={this.handleClickCancel}>Cancel</button>
//         </div>
//       </center>
//     </div>
//   );
// }

export default AboutMe;