import './App.css';
import React from "react";


class App extends React.Component
{

  state = {
    massages: [],
    massage: ""
  }



  firstInput = (e) => {
    const massage = e.target.value;
    this.setState({
      firstName: massage
    })
  }


  addMassage = () => {

    let newMassage;

    newMassage = {
      massage: this.state.massage
    }

    this.state.massages.push(newMassage)
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
    this.state.massages.splice(i, 1)
    this.setState({})
  }

  render() {
    return(
        <div>
          <input placeholder = "Enter A Massage:" value={this.state.massage} onChange={this.firstInput}/>
          <button onClick={this.addMassage} disabled={this.state.massage === "" }>Add massage</button>
          <table>
            {
                this.state.massages.length > 0 &&
                this.state.massages.map((item, i) => {
                  return (
                      <tr key = {i} onClick={this.deleteOne.bind(this, i)}>
                        <td>{item.massage}</td>
                      </tr>
                  )
                })
            }
          </table>
          <h6>{this.state.massages.length === 0 ? "No massages" : "number of messages: " + this.massages.length}</h6>

          <button disabled={this.state.massages.length === 0} onClick={this.clearTable}>Clear</button>


        </div>


    )
  }
}
export default App;