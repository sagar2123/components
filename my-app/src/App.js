import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import ReactTable from "react-table";
import 'react-table/react-table.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hi Everyone this is a small poc
          </a>
        </header>
      </div>
    );
  }
}
// const Ex = function(props) {
//   return (
//     <div>
//       {props.a}
//       {props.b}
//     </div>
//   )
// }


function propsWrapper(props, id) {
  ReactDOM.render( <ReactTable
    data={props.data}
    columns = {props.columns}
    defaultPageSize = {props.defaultPageSize}
    className={props.className}
  />, document.getElementById(id) );

}
export default propsWrapper;
