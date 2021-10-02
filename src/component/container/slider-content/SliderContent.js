import React, { Component } from 'react';
import './SliderContent.css';
import { Carousel} from 'react-bootstrap';
class SliderContent extends Component {
    render() {
        return (
            <div> 
                <div className="slider warp ">
                     <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src="./img/sliderdonw1_.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                            className="d-block w-100"
                            src="./img/sliderdonw2_.jpg"
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                           
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./img/sliderdonw3_.jpg"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                           
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./img/sliderdonw4_.jpg"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./img/sliderdonw5_.jpg"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </div>
           
            </div>
        );
    }
}

export default SliderContent;