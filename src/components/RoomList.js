import React, { Component } from 'react'
const chanels=["Wed Development","App Development","Machine Learning","Cloud Computing"]
class RoomList extends Component {
    render() {
        return (
            <div className="middle col-2">
            {
                    chanels.map((chanel,index)=> {
                        return(
                        <p key={index}>{chanel}</p>
                        )
                        })
    
            
            }
            </div>
        )
    }
}

export default RoomList
