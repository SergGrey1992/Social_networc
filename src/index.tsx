import React from 'react';
import './index.css';
import {subscribe} from "./redux/state";
import {renderTree} from "./render";

subscribe(renderTree)
renderTree();

