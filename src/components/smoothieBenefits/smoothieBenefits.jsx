import React, {Component} from 'react';
import { 
  SmoothieBenefitsWrapper, 
  SmoothieImage,} from './smoothieBenefits.s';
import * as smoothieImage from '../../assets/smoothieinfo.png'

export class SmoothieBenefits extends Component {
  render() {
    return (
      <SmoothieBenefitsWrapper>
        
        <SmoothieImage src={smoothieImage} />

      </SmoothieBenefitsWrapper>
    )
  }
}