import React, {Component} from 'react';
import { 
  SmoothieBenefitsWrapper, 
  BenefitsContainer,
  BenefitWrapper,
  BenefitIcon,
  Benefit, 
  } from './smoothieBenefits.s';
import {Title} from '../aboutSmoothie/aboutSmoothie.s'
import * as fitnessIcon from '../../assets/icons/fitnessIcon.png'
import * as muscleIcon from '../../assets/icons/muscleIcon.png'
import * as brainIcon from '../../assets/icons/brainIcon.png'
import * as sleepIcon from '../../assets/icons/sleepIcon.png'

export class SmoothieBenefits extends Component {
  render() {
    return (
      <SmoothieBenefitsWrapper>
        <Title> Smoothie benefits</Title>
        <BenefitsContainer>

          <BenefitWrapper>
            <BenefitIcon src={fitnessIcon} />
            <Benefit>              
             Smoothies can help you lose excess body weight.
              The fruits and 
              berries that are used to prepare these drinks 
              serve as excellent companions for keeping you 
              healthy
            </Benefit>
          </BenefitWrapper>

          <BenefitWrapper>
            <BenefitIcon src={muscleIcon} />
            <Benefit>
              Drinking our smoothies can help you
              build muscle mass, get better strength 
              results and improve your physical condition
            </Benefit>
          </BenefitWrapper>

          <BenefitWrapper>
            <BenefitIcon src={sleepIcon} />
            <Benefit>
            With the right ingredients, smoothies can help you to get a good night’s sleep.

            Other good sleep aids include kiwis and bananas.​
            </Benefit>
          </BenefitWrapper>

          <BenefitWrapper>
            <BenefitIcon src={brainIcon} />
            <Benefit>
              Fruits and vegetables increase brain power 
              and boost memory. Concentration is greatly enhanced by ingredients 
              like coconut that are rich in omega-3 fatty acids. 
              Smoothies with these ingredients help the brain work faster.
            </Benefit>
          </BenefitWrapper>

        </BenefitsContainer>

      </SmoothieBenefitsWrapper>
    )
  }
}