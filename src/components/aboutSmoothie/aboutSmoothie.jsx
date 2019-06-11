import React, {Component} from 'react';
import { 
  AboutSmoothieWrapper,
  SmoothieFromTop, 
  AboutSmoothieTitle,
  ReasonWrapper,
  ContentBox,
  ReasonIcon,
  Reason} from './aboutSmoothie.s';
import * as SmoothieFromTopImage from '../../assets/smoothiefromtop.png'
import ScrollAnimation from 'react-animate-on-scroll';
import * as naturalIcon from '../../assets/icons/naturalIcon.png'
import * as healthyIcon from '../../assets/icons/healthyIcon.png'
import * as aproveIcon from '../../assets/icons/aproveIcon.png'
import * as worldIcon from '../../assets/icons/worldIcon.png'

export class AboutSmoothie extends Component {
  render() {
    return(
      <AboutSmoothieWrapper>
        <ContentBox>

          <ScrollAnimation
            animateIn='zoomIn'
            animateOnce={true}
            delay={100}
          >
            <ReasonWrapper>
              <ReasonIcon src={naturalIcon} />
              <Reason> 
                We produce our smoothies only
                from freshly pressed natural ingredients.                
              </Reason>
           </ReasonWrapper>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn='zoomIn'
            animateOnce={true}
            delay={500}
          >
            <ReasonWrapper>
              <ReasonIcon src={healthyIcon} />
              <Reason> 
                Our smoothies are made only with 
                healthy and natural fruits and vegetables!
              </Reason>
           </ReasonWrapper>
          </ScrollAnimation>
          
        </ContentBox>
        
        <ContentBox>
          <AboutSmoothieTitle>
            Why Smoothie Delight?
          </AboutSmoothieTitle>
          <SmoothieFromTop src={SmoothieFromTopImage} />
        </ContentBox>

        <ContentBox>

        <ScrollAnimation
            animateIn='zoomIn'
            animateOnce={true}
            delay={300}
          >
            <ReasonWrapper>
              <ReasonIcon src={aproveIcon} />
              <Reason>
                Each smoothie is different, 
                try those prepared by us or try to make your own!
              </Reason>
           </ReasonWrapper>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn='zoomIn'
            animateOnce={true}
            delay={700}
          >
            <ReasonWrapper>
              <ReasonIcon src={worldIcon} />
              <Reason>
                Millions of people around the world 
                have approved our smoothies as the best!
              </Reason>
           </ReasonWrapper>
          </ScrollAnimation>
          
        </ContentBox>
        
      </AboutSmoothieWrapper>
    )
  }
}