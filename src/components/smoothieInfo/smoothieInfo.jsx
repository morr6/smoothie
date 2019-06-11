import React, {Component} from 'react';
import { 
  SmoothieinfoWrapper, 
  SmoothieImage,
  SmoothieDescription,
  DescriptionHeader} from './smoothieInfo.s';
import * as smoothieImage from '../../assets/smoothieinfo.png'
import ScrollAnimation from 'react-animate-on-scroll';

export class SmoothieInfo extends Component {  
  render() {
    return (
      <SmoothieinfoWrapper>

        <SmoothieDescription>
          <ScrollAnimation 
            animateIn="fadeInLeft"
            animateOnce={true}
          >
            <DescriptionHeader>
              Smoothie
            </DescriptionHeader> 
            is a blended and chilled drink based on 
            fruits and vegetables, with a thick and creamy 
            consistency. Most often they are prepared by mixing 
            fresh fruits and vegetables with ice, water or fruit
            or vegetable juice until smooth.
          </ScrollAnimation>
        </SmoothieDescription>

        <SmoothieImage src={smoothieImage} />

        <SmoothieDescription>
          <ScrollAnimation 
            animateIn="fadeInRight" 
            animateOnce={true}
            delay={300}
          >
              <DescriptionHeader>
                Our products
              </DescriptionHeader> 
              we care about what you drink so we produce 
              smoothies only with natural and healty 
              fruits and vegetables that help your body 
              and tasted delicious
            </ScrollAnimation>
        </SmoothieDescription>
      </SmoothieinfoWrapper>
    )
  }
}