import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getNotes, saveNote, deleteNote } from '../actions/notesAction';
import NoteCard from './NoteCard';
import { getUser } from '../actions/userAction';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import renderHTML from 'react-render-html';

class App extends Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
    title: '',
    body: ''
    };

   
 
		// bind
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderNotes = this.renderNotes.bind(this);
    };

    // lifecycle
    componentDidMount() {
    this.props.getNotes();
    }
    // handle change
    handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    }

    // handle submit
    handleSubmit(e) {
    e.preventDefault();
    const note = {
    title: this.state.title,
    body: this.state.body,
    uid: this.props.user.uid
    };
    this.props.saveNote(note);
    this.setState({
    title: '',
    body: ''
    });
    }

    // render notes
  	renderNotes() {
    return _.map(this.props.notes, (note, key) => {
    return (
		<NoteCard key={key}>
    <Link to={`/${key}`}>
    <h2>{note.title}</h2>
    </Link>
    <p>{renderHTML(note.body)}</p>
    {note.uid === this.props.user.uid && (
    <div>
    <button className="btn btn-danger btn-xs" onClick={() => this.props.deleteNote(key)}>
    	Delete
    </button>
    <button className="btn btn-info btn-xs pull-right">
    <Link to={`/${key}/edit`}>Update</Link>
    </button>
    </div>
    )}
		</NoteCard>
    );
    });
    }

render() {
	return (
  <div className="container-fluid">
  <div className="row">
  <div className="col-sm-2 text-center">
  <img 
	src={this.props.user.photoURL}
	height="100px"
	className="img img-responsive circle" 
	style={{ padding: '20px' }} 
	/>
  <h4 className="username">Welcome back {this.props.user.displayName}</h4>
  </div>
  <div className="col-sm-10">
  <form onSubmit={this.handleSubmit}>
  <div className="form-group">
  <input
  onChange={this.handleChange}
  value={this.state.title}
  type="text"
  name="title"
  className="form-control no-border"
  placeholder="Title..."
  required
  />
  </div>
			
  <div className="form-group">
  <ReactQuill 
   modules={App.modules}
    formats={App.formats}
    value={this.state.body}
    placeholder="Topic" 
    onChange={this.onHandleChange} 
  />
  
{/* <textarea
	onChange={this.handleChange}
   type="text"
   value={this.state.body}
   name="body"
   className="form-control no-border"
   placeholder="Body..."
   required
  /> */}
   </div>
  <div className="form-group">
	
  <button className="btn btn-primary col-sm-12">Save</button>
	</div>
  </form>
  <br />
  <br />
  <br />
 {this.renderNotes()}
  </div>
  </div>
  </div>
  );
    }
}

App.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, {font:[] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, {list: 'bullet' }],
    ['link', 'image', 'video'],
    ['clean'],
    ['code-block']
  ]

};
App.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet',
  'link', 'image', 'video', 'code-block'
]


function mapStateToProps(state, ownProps) {
    return {
        notes: state.notes,
        user: state.user
    };
}

export default connect(mapStateToProps, { getNotes, saveNote, deleteNote, getUser })(App);