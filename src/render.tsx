import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {state} from "./redux/state";

export let renderTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
}