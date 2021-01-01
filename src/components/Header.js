import React, { Component } from 'react'
import { logOut } from '../helpers/auth';
var status="login"
class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(){
      logOut()
    }
    render() {
        if(this.props.user){
           status=this.props.user;
        }
        return (
            <div className="container-fluid top">
                <div className="nav-logo">
                    <img width="150" height="80" src="https://i.postimg.cc/1zL5F9yt/loomof.png"/>
                </div>
                <div className="nav">
                    <ul>
                        <li onClick={this.handleSubmit}>{status}</li>
                    </ul>
                </div>
</div>
        )
    }
}

export default Header
