import React,{Component} from 'react';
import { 
  MenuWrapper, 
  OpenMenu, 
  CloseMenuButton,
  MenuButtons,
  Button } from './menu.s';
import MaterialIcon from 'material-icons-react';
import { animateScroll as scroll } from 'react-scroll'
import * as color from '../../utilities/colors';

export class Menu extends Component {
  constructor() {
    super();

    this.state = {
      isMenuOpen: false
    }
  }

  toogleMenu() {
    this.setState({isMenuOpen: !this.state.isMenuOpen})
  }

  render() {
    return(
      <div>
        <MenuWrapper isMenuOpen={this.state.isMenuOpen}>
          <CloseMenuButton onClick={() => this.toogleMenu()}>
            <MaterialIcon 
            icon='clear' 
            size='large'  
            color={color.TransparentWhiteColor}
          />
          </CloseMenuButton>
          <MenuButtons>
            <Button onClick={() => scroll.scrollToTop()}> 
              home
            </Button>
            <Button onClick={() => this.props.scroll('smoothieInfo')}> 
              what is smoothie 
            </Button>
            <Button onClick={() => this.props.scroll('aboutSmoothie')}> 
              why smoothie 
            </Button>
            <Button onClick={() => this.props.scroll('smoothieBenefits')}> 
              health benefits 
            </Button>
            <Button onClick={() => scroll.scrollToBottom()}>  
              stay in touch 
            </Button>
          </MenuButtons>

        </MenuWrapper> 
        { !this.state.isMenuOpen && 
          <OpenMenu onClick={() => this.toogleMenu()}>
            <MaterialIcon 
              icon='menu' 
              size='large'  
              color={color.WatermelonColor}
            />
          </OpenMenu>
        }
      </div>
    )
  }
}
