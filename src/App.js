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


  addMassage = () => {

    let newMassage;

    newMassage = this.state.message;


    this.state.messages.push(newMassage)
    this.setState({
      massage: "",
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
          <button onClick={this.addMassage} disabled={this.state.message === "" }>Add massage</button>
          <table>
            {
                this.state.messages.length > 0 &&
                this.state.messages.map((item, i) => {
                  return (
                      <tr key = {i} onClick={this.deleteOne.bind(this, i)}>
                        <td>{item.massage}</td>
                      </tr>
                  )
                })
            }
          </table>
          <h6>{this.state.messages.length === 0 ? "No massages" : "number of messages: " + this.messages.length}</h6>

          <button disabled={this.state.messages.length === 0} onClick={this.clearTable}>Clear</button>


        </div>


    )
  }
}
export default App;