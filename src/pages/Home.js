import React, { Component } from 'react'
import MessageContainer from '../components/MessageContainer';
import Header from '../components/Header';
import RoomList from '../components/RoomList';
import NewRoom from '../components/NewRoom';
import NewMessage from '../components/NewMessage';
import { auth } from "../services/firebase";
import { db } from "../services/firebase"
var chates=[]
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: auth().currentUser,
      chats: [],
      content: '',
      readError: null,
      writeError: null
    };
  }

  async componentDidMount() {
    this.setState({ readError: null });
    try {
      db.ref("chats").on("value", snapshot => {
        let chats = [];
        const data = snapshot.val();
        for (let snap in data) {
          chats.push(snap);
        } 
        this.setState({ chats });
        });
    } catch (error) {
      this.setState({ readError: error.message });
    }
  }

    render() {
        return (
            <div className="App">
        <div>
        <Header user={this.state.user.email}/>
      <div className="container-fluid">
        <div className="row">
        <RoomList/>
        <MessageContainer chates={this.state.chats}/>
        </div>
      </div>
      <div className="container-fluid">
      <div className="row">
        <NewRoom/>
        <NewMessage/>
      </div>
      </div>
            </div>
        </div>
        )
    }
}

export default Home
