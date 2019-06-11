import glamorous from 'glamorous';
import {css} from 'glamor';
import * as color from '../../utilities/colors';

const onIconHover = css.keyframes({
  '0%' : {transform: 'scale(1)'},
  '50%' : {transform: 'scale(1.1)'},
  '100%' : {transform: 'scale(1)'}
})

export const AboutSmoothieWrapper = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  height: '100vh',
  margin: '50px 0',
})

export const MiddleBox = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  
})

export const SmoothieFromTop = glamorous.img({})

export const Title = glamorous.h1({
  fontFamily: `'Courgette', cursive`,
  color: color.TransparentWatermelonColor,
  fontSize: '50',
})

export const ContentBox = glamorous.div({
  width: '33%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  
})

export const ReasonWrapper = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between', 
  height: '200px',
  width: '250px',
})

export const ReasonIcon =  glamorous.img({
  ':hover' : {
    cursor: 'pointer',
    animation: `${onIconHover} 1.5s infinite ease`
  }
})

export const Reason = glamorous.div({
  textAlign: 'center',
  fontSize: '20',
  fontFamily: `'Roboto Mono', monospace`,  
})
