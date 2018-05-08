import React from 'react'
import Link from 'gatsby-link'

import { slide as Menu } from 'react-burger-menu'
import mobileLogo from '../assets/images/mobile_logo.svg'

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px',
    background: '#373a47',
    border: '10px solid #373a47',
    boxSizing: 'content-box',
    borderRadius: '10px',
  },
  bmBurgerBars: {
    background: 'white',
    height: '15%',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: 'white',
  },
  bmMenu: {
    background: '#373a47',
    padding: '1.5em 1em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: 'white',
    padding: '0.8em',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
}

var linkStyles = {
  border: 'none',
  paddingTop: '.5rem',
  paddingBottom: '.5rem',
}

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }
  closeMenu = () => {
    this.setState({ menuOpen: false })
  }
  render() {
    return (
      <Menu
        styles={styles}
        right
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        <Link style={linkStyles} to="/" onClick={() => this.closeMenu()}>
          home
        </Link>
        <Link
          style={linkStyles}
          to="/#mission"
          onClick={() => this.closeMenu()}
        >
          mission
        </Link>
        <Link
          style={linkStyles}
          to="/#who-and-why"
          onClick={() => this.closeMenu()}
        >
          about
        </Link>
        <Link style={linkStyles} to="/#how" onClick={() => this.closeMenu()}>
          programs
        </Link>
        <Link style={linkStyles} to="/faq" onClick={() => this.closeMenu()}>
          faq
        </Link>
        <Link style={linkStyles} to="sign-up" onClick={() => this.closeMenu()}>
          sign up
        </Link>
      </Menu>
    )
  }
}

export default Nav
