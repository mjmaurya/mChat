import React, { Component } from 'react'
import { auth } from "../services/firebase";
import { db } from "../services/firebase"
const messages=[]
class MessageContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
          user: auth().currentUser,
          chats:this.props.chates,
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
            snapshot.forEach((snap) => {
              chats.push(snap.val());
            });
            this.setState({ chats });
          });
        } catch (error) {
          this.setState({ readError: error.message });
        }
      }
    

    render() {
        return (
            <div className="middle message col-10">
                {
                    this.state.chats.map((message,index)=>{
                      let classcont=message.uid==this.state.user.uid?"mesaageCont":"mesaageCont2";
                        return(
                            <div className={classcont} key={index}>
                                <p className="userId">{message.uid}</p>
                                <p className="userMessage"><span>{message.content}</span></p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default MessageContainer
