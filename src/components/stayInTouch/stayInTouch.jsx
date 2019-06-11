import React,{Component} from 'react';
import { 
  StayInTouchWrapper, 
  Title, 
  EmailInput, 
  SendButton, 
  EmailInner, 
  EmialValidationErrorMessage} from './stayInTouch.s';
import * as LocalStorage from '../../utilities/localStorage'

export class StayInTouch extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      isEmailValid: true
    }
  }

  getEmailFromInput(event) {
    this.setState({email: event.target.value})
  }

  validateEmail(email) {
      let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let isEmailValid = regExp.test(String(email).toLowerCase());
      isEmailValid ? 
        this.setState({isEmailValid: true}) : 
        this.setState({isEmailValid: false})
      
      return isEmailValid;
  }

  addEmailToStorage(email) {
    this.validateEmail(email) && LocalStorage.addEmailToStorage(email) 
    
  }

  componentDidMount() {
    LocalStorage.localStorageInit()
  }

  render() {
    console.log(this.state)
    return(
      <StayInTouchWrapper>
        <Title>
          Stay alert to our new products
        </Title>
        
        <EmailInner>
          <EmailInput 
            placeholder='enter your email'
            isEmailValid={this.state.isEmailValid}
            onChange={(event) => this.getEmailFromInput(event)}
            maxLength='40'
          />
          <SendButton
            isEmailValid={this.state.isEmailValid}
            onClick={() => this.addEmailToStorage(this.state.email)}
          >
            SEND
          </SendButton>
        </EmailInner>
        { !this.state.isEmailValid && 
          <EmialValidationErrorMessage>
            *incorrect email
          </EmialValidationErrorMessage>
        }
      </StayInTouchWrapper>
    )
  }
}