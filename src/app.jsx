import React from 'react';
import Slider from './components/Slider.jsx';

var slidesData = [
	{name: 'photo1', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/React.js_logo.svg/2000px-React.js_logo.svg.png'},
	{name: 'photo2', src: 'http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png'},
	{name: 'photo3', src: 'http://daynin.github.io/clojurescript-presentation/img/react-logo.png'}
]; 

React.render(<Slider slides={slidesData} 
					 interval={3000} />, 
			document.getElementById('slider-wrap'));

