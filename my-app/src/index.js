import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import propsWrapper from './App';
import * as serviceWorker from './serviceWorker';
const data = [{firstName: 'Tanner Linsley', age: 26, visit: 20},
{firstName: 'Tanner Linsley', age: 26, visit: 20},
{firstName: 'Tanner Linsley', age: 26, visit: 20},
{firstName: 'Tanner Linsley', age: 26, visit: 20},
{firstName: 'Tanner Linsley', age: 26, visit: 20},
{firstName: 'Tanner Linsley', age: 26, visit: 20},
{firstName: 'Tanner Linsley', age: 26, visit: 20},
{firstName: 'Tanner Linsley', age: 26, visit: 20}]
const columns=[
  {
    Header: "Name",
    accessor: "firstName"
  },
  {
    Header: "Info",
    accessor: "age"
  },
  {
    Header: "Stats",
    accessor: "visit"
  }
]
// ReactDOM.render(div, document.getElementById('root'));
// var a = document.getElementById('root');
// a.append(div);
propsWrapper({"data": data, "columns": columns, "defaultPageSize":10, "className":"-striped -highlight"}, "root");
// console.log(a);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
