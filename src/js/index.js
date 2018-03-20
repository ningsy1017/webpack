// import '../css/main.css';
// import _ from 'lodash';
import printMe from './print.js';
import { cube } from '../common/math.js';

  function component() {
    // var element = document.createElement('div');
	// var btn = document.createElement('button');
	

    var element = document.createElement('pre');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

 	// btn.innerHTML = 'Click me and check the console!';  
    // btn.onclick = printMe;
    // element.appendChild(btn);

	element.innerHTML = [
		'Hello webpack!',
		'5 cubed is equal to ' + cube(5)
	].join('\n\n');

	return element;
  }

  document.body.appendChild(component());

   if(module.hot) {




   }