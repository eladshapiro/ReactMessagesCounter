import './App.css';
import React from "react";


class App extends React.Component
{

  state = {
    messages: [],
    message: "",
    overTwenty: 0,
    underTwenty: 0
  }



  messageInput = (e) => {
    const messageInput = e.target.value;
    this.setState({
      message: messageInput
    })
  }


  addMessage = () => {
    let newMessage;
    newMessage = {
      message: this.state.message
    }
    this.state.messages.push(newMessage);
    (this.state.message.length)>20? this.setState({
          overTwenty: this.state.overTwenty+1
        }) : this.setState({
      underTwenty: this.state.underTwenty+1
    })
    this.setState({
      message: ""
    })

  }


  clearList = () => {
    this.setState({
      messages: [],
      overTwenty: 0,
      underTwenty:0
    })
  }

  deleteOne = (i) => {
    this.state.messages.splice(i, 1)
    this.setState({})
  }

  render() {
    return(
        <div>
          {this.state.messages.length > 0 ?
                <h2> Number of messages: {this.state.messages.length} </h2> : <h2> No messages </h2>}
          <input placeholder = "Enter A Massage:" value={this.state.message} onChange={this.messageInput}/>
          <button onClick={this.addMessage} disabled={this.state.message === "" }>Add message</button>
          <ol>
            {
                this.state.messages.length > 0 &&
                this.state.messages.map((item) =>{
                  return(
                      <li> {item.message} </li>
                  )
                })
            }
          </ol>
          <button disabled={this.state.messages.length === 0} onClick={this.clearList}>Clear</button>
          <h2>under or equal to 20: {this.state.underTwenty}</h2>
          <h2>Over 20: {this.state.overTwenty}</h2>

        </div>


    )
  }
}
export default App;