import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

function App(props) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

root.render(
  <App title='陈的react框架'></App>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
