import React, {Component} from 'react';
import Slide from './Slide';
import getStyles from '../sliderStyles';

const ARROW_LEFT_KEY_CODE = 37;
const ARROW_RIGHT_KEY_CODE = 39;

export default class Slider extends Component {
  constructor() {
    super();
    this._bind('_goForward', '_onKeyPressHandle');
    this.state = {
      currentSlideIndex: 0
    };
  } 

  propTypes: {
    slides: React.PropTypes.array.isRequired,
    interval: React.PropTypes.number
  }

  _bind(...methods) {
    methods.forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }

  _goBack() {
    let currentSlideIndex = this.state.currentSlideIndex;
    currentSlideIndex = currentSlideIndex !== 0 ? currentSlideIndex-1 : 0;
    this.setState({ currentSlideIndex: currentSlideIndex });
  }

  _goForward() {
    let currentSlideIndex = this.state.currentSlideIndex;
    let lastIndex = this.props.slides.length - 1;
    currentSlideIndex = currentSlideIndex !== lastIndex ? currentSlideIndex + 1 : lastIndex;
    this.setState({ currentSlideIndex: currentSlideIndex });
  }

  _onKeyPressHandle(e) {
    let pressedKey = e.keyCode;
    if (pressedKey === ARROW_LEFT_KEY_CODE) {
      this._goBack();
      this.setTransitionInterval();
    } else if (pressedKey === ARROW_RIGHT_KEY_CODE) {
      this._goForward();
      this.setTransitionInterval();
    } else {
      return false;
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this._onKeyPressHandle);
    this.setTransitionInterval();
  }

  setTransitionInterval() {
    if (!this.props.interval) {
      return false;
    }
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(this._goForward, this.props.interval);
  }

  render() {
    return (
      <div className="slider" style={ getStyles().sliderCSS }>
         <Slide value={this.props.slides[this.state.currentSlideIndex]}/>;
      </div>
    );
  }
}