import glamorous from 'glamorous';
import * as color from '../../utilities/colors'

export const StayInTouchWrapper = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '100px 10%',
  height: '300px',
  width: '80%',
  backgroundSize: '25% 100%',
  transition: '1s',

  ':hover' : {
    background: 'rgba(252,108,133,.25)'
  }
})

export const Title = glamorous.div({
  fontFamily: `'Courgette', cursive`,
  fontSize: '55',
  marginBottom: '50px',
  color: color.TransparentWhiteColor,
  WebkitTextStroke: `2px ${color.WatermelonColor}`
})

export const EmailInner = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const EmailInput = glamorous.input(props => {
  return {
    width: '500px',
    height: '46px',
    borderRadius: '50px',
    border: `2px solid ${props.isEmailValid ? color.WatermelonColor : 'red'}`,
    outline: 'none',
    fontFamily: `'Roboto Mono', monospace`,
    fontSize: '20',
    textAlign: 'left',
    padding: '0 20px',
    transition: '.3s'
  }
})

export const SendButton = glamorous.button(props => {
  return {
    marginLeft: '-100px',
    outline: 'none',
    border: `2px solid ${props.isEmailValid ? color.WatermelonColor : 'red'}`,
    background: props.isEmailValid ? color.WatermelonColor : 'red',
    width: '200px',
    height: '50px',
    borderRadius: '50px',
    fontFamily: `'Roboto Mono', monospace`,
    fontSize: '20',
    color: color.TransparentWhiteColor,
    cursor: 'pointer',
    transition: '.3s'
  }
})

export const EmialValidationErrorMessage = glamorous.div({
  fontSize: '15',
  fontWeight: 'bold',
  color: 'red',
  width: '500px',
  textAlign: 'left'
})

export const EmailSentMessage = glamorous.div({
  fontFamily: `'Courgette', cursive`,
  fontSize: '55',
  marginBottom: '50px',
  color: color.TransparentWhiteColor,
  WebkitTextStroke: `2px ${color.WatermelonColor}`
})