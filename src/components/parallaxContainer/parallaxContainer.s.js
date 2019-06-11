import glamorous from 'glamorous';
import * as parallaxImage from '../../assets/parallaximage.jpg'

export const ParallaxWrapper = glamorous.div({
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  height: '500px',
  width: '100%', 
})