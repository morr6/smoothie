import glamorous from 'glamorous';
import * as color from '../../utilities/colors' 

export const SmoothieinfoWrapper = glamorous.div({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'flex-end',
  height: '100vh',
  margin: '50px 0'
})

export const SmoothieImage = glamorous.img({  
})

export const SmoothieDescription = glamorous.div(props => {
  return {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'justify',
    fontFamily: `'Roboto Mono', monospace`,
    textAlign: 'center',
    width: '450px',
    height: '100%',
    fontSize: '25',
    padding: '0 100px',
    animationFillMode: 'forwards',
  }
})

export const SmoothieIcon = glamorous.img({
  height: '100px',
  width: '75px'
})

export const DescriptionHeader = glamorous.h1({
  color: color.TransparentWatermelonColor
})