import glamorous from 'glamorous';

export const SmoothieBenefitsWrapper = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '50px 0',
  height: '100vh'
})

export const BenefitsContainer = glamorous.div({
  width: '100%',
  height: '80%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
})

export const BenefitWrapper = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexDirection: 'column',  
  height: '60%',
  width: '20%',
})

export const BenefitIcon = glamorous.img({  
  height: '150px',
  width: '150px',
})

export const Benefit = glamorous.div({
  display: 'flex',
  alignItems: 'flex-start',
  textAlign: 'center',
  fontFamily: `'Roboto Mono', monospace`,
  fontWeight: 'bold',
  fontSize: '20',
  height: '200px'
})