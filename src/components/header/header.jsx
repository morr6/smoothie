import React,{Component} from 'react';
import { 
  HeaderWrapper, 
  HeaderTitle, 
  HeaderDescription } from './header.s';

export class Header extends Component {
  render() {
    return(
      <HeaderWrapper>
        <HeaderTitle> Smoothie Delight. </HeaderTitle>
        <HeaderDescription>  
          healthy and delicious fruit juices!
        </HeaderDescription>

      </HeaderWrapper>
    )
  }
}