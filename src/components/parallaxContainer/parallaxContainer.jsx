import React,{Component} from 'react';
import { ParallaxWrapper } from './parallaxContainer.s';
import { Parallax } from 'react-parallax';
import * as parallaxImage from '../../assets/parallaximage.jpg'

export class ParallaxContainer extends Component {
  render() {
    return(
      <Parallax
        blur={5}
        bgImage={parallaxImage}
        bgImageAlt="the cat"
        strength={600}
      >
        <ParallaxWrapper>
          
        </ParallaxWrapper>
    </Parallax>
    )
  }
}