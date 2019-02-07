import React, { Component } from 'react';
import './carousel.scss';

import MainImage from './MainImage';
import ThumbnailReel from './ThumbnailReel';
import MainReel from './MainReel';
import Thumbnail from './Thumbnail';
import ThumbnailIndicator from './ThumbnailIndicator';

const DEMO_MAX_INDEX = 13;

export default class Carousel extends Component {
  state = {
    index: 0,
    thumbnailHops: 0,
    isFullscreen: false,
    isShowingThumbnails: false
  };

  componentDidMount() {
    //    window.addEventListener('keydown');
  }

  incrementIndex = () => {
    let index = this.state.index + 1;
    if (index > DEMO_MAX_INDEX) {
      index = 0;
    }

    this.setState({ index });
  };

  decrementIndex = () => {
    let index = this.state.index - 1;
    if (index < 0) {
      index = DEMO_MAX_INDEX;
    }

    this.setState({ index });
  };

  goToIndex = index => {
    if (index <= DEMO_MAX_INDEX && index >= 0) {
      this.setState({ index });
    }
  };

  toggleFullscreen = () => {
    this.setState(
      {
        isFullscreen: !this.state.isFullscreen,
        isShowingThumbnails: false
      },
      () => {
        if (this.state.isFullscreen) {
          window.addEventListener('keydown', this.handleKeyboard);
        } else {
          window.removeEventListener('keydown', this.handleKeyboard);
        }
      }
    );
  };

  handleKeyboard = evt => {
    if (evt.keyCode === 37) {
      this.decrementIndex();
    } else if (evt.keyCode === 39) {
      this.incrementIndex();
    }
  };

  toggleThumbnails = () => {
    this.setState({
      isShowingThumbnails: !this.state.isShowingThumbnails
    });
  };

  render() {
    return (
      <div
        className={`ev-carousel-container${
          this.state.isFullscreen ? ' fullscreen' : ''
        }${this.state.isShowingThumbnails ? ' show-thumbnails' : ''}`}>
        <MainReel
          index={this.state.index}
          decrementIndex={this.decrementIndex}
          incrementIndex={this.incrementIndex}
          toggleFullscreen={this.toggleFullscreen}>
          <MainImage src="1.jpg" />
          <MainImage src="2.jpg" />
          <MainImage src="3.jpg" />
          <MainImage src="4.jpg" />
          <MainImage src="5.jpg" />
          <MainImage src="6.jpg" />
          <MainImage src="7.jpg" />
          <MainImage src="8.jpg" />
          <MainImage src="9.jpg" />
          <MainImage src="10.jpg" />
          <MainImage src="11.jpg" />
          <MainImage src="12.jpg" />
          <MainImage src="13.jpg" />
          <MainImage src="14.jpg" />
        </MainReel>
        {this.state.isFullscreen && (
          <ThumbnailIndicator
            isShowingThumbnails={this.state.isShowingThumbnails}
            toggleThumbnails={this.toggleThumbnails}
          />
        )}
        <ThumbnailReel
          index={this.state.index}
          goToIndex={this.goToIndex}
          maxIndex={13}>
          <Thumbnail src="1.jpg" />
          <Thumbnail src="2.jpg" />
          <Thumbnail src="3.jpg" />
          <Thumbnail src="4.jpg" />
          <Thumbnail src="5.jpg" />
          <Thumbnail src="6.jpg" />
          <Thumbnail src="7.jpg" />
          <Thumbnail src="8.jpg" />
          <Thumbnail src="9.jpg" />
          <Thumbnail src="10.jpg" />
          <Thumbnail src="11.jpg" />
          <Thumbnail src="12.jpg" />
          <Thumbnail src="13.jpg" />
          <Thumbnail src="14.jpg" />
        </ThumbnailReel>
      </div>
    );
  }
}
