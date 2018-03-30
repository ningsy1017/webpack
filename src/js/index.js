import '../css/main.css';
import printMe from './print.js';
import { cube } from '../common/math.js';
import React from 'react';
import ReactDOM from 'react-dom';


export default function(){
	return(
		<div>
			这是个什么呢
		</div>
	)
}

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
}
