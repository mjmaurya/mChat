import React, { Component } from 'react'
import { auth } from "../services/firebase";
import { db } from "../services/firebase"

class NewMessage extends Component {

    constructor(props) {
        super(props);
        this.state={
            user: auth().currentUser,
            content:""

        }
        // ...
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        this.setState({
          content: event.target.value
        });
      }

       handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.user.uid)
        this.setState({ writeError: null });
        try {
        db.ref("chats").push({
            content: this.state.content,
            timestamp: Date.now(),
            uid: this.state.user.uid
          });
          this.setState({ content: '' });
        } catch (error) {
          this.setState({ writeError: error.message });
        }
      }
    render() {
        return (
            <div className="bottom newMessage col-10">
                <form>
                <div className="row">
                <input type='text' onChange={this.handleChange} value={this.state.content} className="form-control col-11" placeholder='Write Message Here'/>
                <button onClick={this.handleSubmit} className="col-1" type="submit">Send</button>
                </div>
                </form>
            </div>
        )
    }
}

export default NewMessage
