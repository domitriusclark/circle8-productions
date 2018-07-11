import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import './ImageGallery.css';

const photos = [
  { src: './images/unnamed-4.jpg', width: 4, height: 3 },  
  { src: './images/unnamed-2.jpg', width: 3.10, height: 2 },
  { src: './images/unnamed-3.jpg', width: 3.95, height: 3 },
  { src: './images/unnamed-1.jpg', width: 4, height: 3 },
  { src: './images/unnamed-6.jpg', width: 4, height: 3 },
  { src: './images/unnamed-7.jpg', width: 3.9, height: 2.9 },
  { src: './images/unnamed-8.jpg', width: 4, height: 3 },
  { src: './images/unnamed-9.jpg', width: 4.9, height: 3 },
  { src: './images/unnamed-10.jpg', width: 4, height: 3 },
];


class ImageGallery extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div className="imageContainer">
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}

export default ImageGallery;