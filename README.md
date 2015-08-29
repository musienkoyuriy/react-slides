# react-slides
The simple UI component for making presentation. Based on ReactJS library and Webpack module bundler.

# Install:

      npm install reactslides
      
# Usage:
	
	import React from 'react';
	import Slider from './components/Slider.jsx';

	var slidesData = [
		{src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/React.js_logo.svg/2000px-React.js_logo.svg.png'},
		{src: 'http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png'},
		{src: 'http://daynin.github.io/clojurescript-presentation/img/react-logo.png'}
	]; 
	
	React.render(<Slider slides={slidesData} 
			     interval={3000} />, 
	document.getElementById('slider-wrap'));
      
      
