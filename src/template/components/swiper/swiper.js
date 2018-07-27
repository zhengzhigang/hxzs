import React, {Component} from 'react'
import ReactSwipe from 'react-swipe';

const numberOfSlides = p20;
const paneNodes = Array.apply(null, Array(numberOfSlides)).map((_, i) => {
    return (
      <div key={i}>
        <div className="item">{i}</div>
      </div>
    );
  });

const startSlide = 0;
const swipeOptions = {
    startSlide: startSlide < paneNodes.length && startSlide >= 0 ? startSlide : 0,
    auto: parseInt(query.auto, 10) || 0,
    speed: parseInt(query.speed, 10) || 300,
    disableScroll: query.disableScroll === 'true',
    continuous: query.continuous === 'true',
    callback() {
        console.log('slide changed');
    },
    transitionEnd() {
        console.log('ended transition');
    }
};
class Carousel extends Component {
    next = () => {
        this.reactSwipe.next();
    }
    
    prev = () => {
        this.reactSwipe.prev();
    }
    render() {
        return (
            <div>
                <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} className="mySwipe" swipeOptions={swipeOptions}>
                    {paneNodes}
                </ReactSwipe>
                <div>
                    <button type="button" onClick={this.prev}>Prev</button>
                    <button type="button" onClick={this.next}>Next</button>
                </div>
            </div>
        );
    }
}

export default Carousel;