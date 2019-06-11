import glamorous from 'glamorous';
import {css} from 'glamor'
import * as headerBackground from '../../assets/headersmoothies.jpg';
import * as color from '../../utilities/colors'

const titleFadeIn = css.keyframes({
  '0%' : { opacity: 0, marginLeft: '-500px' },
  '100%' : { opacity: 1, marginLeft: '0' }
})

const descriptionFadeIn = css.keyframes({
  '0%' : { opacity: 0, marginRight: '-500px' },
  '100%' : { opacity: 1, marginRight: '0' }
})

export const HeaderWrapper = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100%',
  background: `url(${headerBackground})`,
  backgroundSize: '100% 100%',
})

export const HeaderTitle = glamorous.div({
  fontFamily: `'Courgette', cursive`,
  fontSize: 120,
  color: color.WatermelonColor,
  textShadow: `2px 2px ${color.TransparentWhiteColor}`,
  opacity: 0,
  animation: `${titleFadeIn} 1.2s ease-out`,
  animationDelay: '.5s',
  animationFillMode: 'forwards',
  marginTop: '-100px'
})

export const HeaderDescription = glamorous.div({
  fontFamily: `'Courgette', cursive`,
  fontSize: 35,
  color: color.TransparentWhiteColor,
  textShadow: `2px 2px ${color.WatermelonColor}`,
  opacity: 0,
  animation: `${descriptionFadeIn} 1.2s ease-out`,
  animationDelay: '1.2s',
  animationFillMode: 'forwards'
})