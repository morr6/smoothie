import glamorous from 'glamorous';
import {css} from 'glamor';
import * as color from '../../utilities/colors'

const FadeId = css.keyframes({
  '0%' : { opacity: '0' },
  '100%' : { opacity: '1' }
})

export const MenuWrapper = glamorous.div(props => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    zIndex: 9999,
    top: 0,
    left: props.isMenuOpen ? '0' : '-20%',
    transition: '.8s',
    height: '100vh',
    opacity: props.isMenuOpen ? '1' : '0',
    width: '20%',
    background: color.TransparentWatermelonColor,
  }
})

export const CloseMenuButton = glamorous.div({
  position: 'absolute',
  top: '10',
  right: '10',
  display: 'flex',
  justifyContent: 'flex-end',
  width: '50px',
  height: '50px',
  cursor: 'pointer',
  padding: '10px 10px 0 0',

  ':hover' : {
    transform: 'scale(.9)'
  },
  ':active' : {
    transform: 'scale(1.1)'
  }
})

export const OpenMenu = glamorous.div({
  cursor: 'pointer',
  position: 'fixed',
  left: 20,
  top: 20,
  zIndex: 9999,
  transition: '.5s',
  animation: `${FadeId} 2s ease`,

  ':hover' : {
    transform: 'scale(.9)'
  },
  ':active' : {
    transform: 'scale(1.1)'
  }
})

export const MenuButtons = glamorous.div({ 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
})

export const Button = glamorous.button({
  height: '40px',
  margin: '15px 0',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  fontSize: 30,
  color: color.TransparentWhiteColor,
  fontFamily: `'Courgette', cursive`,
  cursor: 'pointer',
  transition: '.5s',  

  ':hover' : {
    transform: 'scale(1.1)'
  }
})