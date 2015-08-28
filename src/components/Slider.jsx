import React, {Component} from 'react';
import Slide from './Slide.jsx';
import sliderCSS from '../sliderStyles.js';

const ARROW_LEFT_KEY_CODE = 37;
const ARROW_RIGHT_KEY_CODE = 39;

export default class Slider extends Component {
	constructor() {
		super();
		
		this.state = {
			currentSlideIndex: 0
		};
		this.props = {
			interval: 3000,
			slides: []
		};
	}	

	propTypes: {
		slides: React.PropTypes.array.isRequired,
		interval: React.PropTypes.number
	}

	_goBack() {
		let currentSlideIndex = this.state.currentSlideIndex;

		currentSlideIndex = currentSlideIndex !== 0 ? currentSlideIndex-1 : 0;
		this.setState({currentSlideIndex: currentSlideIndex})
	}

	_goForward() {
		let currentSlideIndex = this.state.currentSlideIndex;
		let lastIndex = this.props.slides.length - 1;

		currentSlideIndex = currentSlideIndex !== lastIndex ? currentSlideIndex + 1 : lastIndex;
		this.setState({currentSlideIndex: currentSlideIndex})
	}

	_onKeyPressHandle(e) {
		let pressedKey = e.keyCode;

		if (pressedKey === ARROW_LEFT_KEY_CODE) {
			this._goBack();
		} else if (pressedKey === ARROW_RIGHT_KEY_CODE) {
			this._goForward();
		} else {
			return false;
		}
	}

	componentDidMount() {
		window.addEventListener('keydown', this._onKeyPressHandle.bind(this))
	}

	render() {
		return (
			<div className="slider" style={sliderCSS}>
				 <Slide value={this.props.slides[this.state.currentSlideIndex]}/>;
			</div>
		);
	}
}