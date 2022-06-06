import './App.css';
import React from "react";


class App extends React.Component
{

  state = {
    messages: [],
    message: ""
  }



  firstInput = (e) => {
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
    this.setState({
      message: ""
    })
  }


  clearTable = () => {
    this.setState({
      massages: []
    })
  }

  deleteOne = (i) => {
    this.state.messages.splice(i, 1)
    this.setState({})
  }

  render() {
    return(
        <div>
          <input placeholder = "Enter A Massage:" value={this.state.message} onChange={this.firstInput}/>
          <button onClick={this.addMessage} disabled={this.state.message === "" }>Add massage</button>
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
          <h6>{this.state.messages.length === 0 ? "No massages" : "number of messages: " + this.messages.length}</h6>

          <button disabled={this.state.messages.length === 0} onClick={this.clearTable}>Clear</button>


        </div>


    )
  }
}
export default App;