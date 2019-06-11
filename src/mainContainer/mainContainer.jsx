import React,{Component} from 'react';
import { MainContainer } from './mainContainer.s';
import {Header} from '../components/header/header';
import {Menu} from '../components/menu/menu'
import {SmoothieInfo} from '../components/smoothieInfo/smoothieInfo'
import {Element, scroller } from 'react-scroll'
import {SmoothieBenefits} from '../components/smoothieBenefits/smoothieBenefits'
import {AboutSmoothie} from '../components/aboutSmoothie/aboutSmoothie'
import { ParallaxContainer } from '../components/parallaxContainer/parallaxContainer';
import { StayInTouch } from '../components/stayInTouch/stayInTouch';

export class Main extends Component {

  scrollTo(name) {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
    console.log(name)
  }

  render() {
    return(
      <MainContainer>
        <Menu 
          scroll={(name) => this.scrollTo(name)}
        />
        <Header /> 

        <Element name='smoothieInfo'>
          <SmoothieInfo />
        </Element>

        <Element name='aboutSmoothie'>
          <AboutSmoothie />
        </Element>

        <ParallaxContainer />

        <Element name='smoothieBenefits'>
          <SmoothieBenefits />
        </Element>

        <StayInTouch />

      </MainContainer>
    )
  }
}