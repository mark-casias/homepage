import React from 'react'
import Link from 'gatsby-link'
import ScrollLock from 'react-scrolllock'
import { TiThMenu, TiTimes } from 'react-icons/lib/ti'
import mobileLogo from '../assets/images/mobile_logo.svg'
import styled from 'styled-components'

const SmallMenu = styled.div`
  display: none;
  @media (max-width: ${props => props.breakpoint}) {
    display: flex;
  }
`

const LargeMenu = styled.div`
  @media (max-width: ${props => props.breakpoint}) {
    display: none;
  }
`

const Menu = ({ handleClick }) => {
  return (
    <ul className="nav-links-container">
      <li className="nav-links logo-container">
        <Link to="/" onClick={handleClick}>
          <img src={mobileLogo} className="logo" alt="" />
        </Link>
      </li>
      <li className="nav-links">
        <Link to="/#mission" onClick={handleClick}>
          mission
        </Link>
      </li>
      <li className="nav-links">
        <Link to="/#who-and-why" onClick={handleClick}>
          about
        </Link>
      </li>
      <li className="nav-links">
        <Link to="/#how" onClick={handleClick}>
          programs
        </Link>
      </li>
      <li className="nav-links">
        <Link to="/faq" onClick={handleClick}>
          faq
        </Link>
      </li>
    </ul>
  )
}

class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showMenu: false,
      scrollLock: false,
      breakpoint: '736px',
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }
  componentWillUnmount() {
    window.addEventListener('resize', null)
  }

  handleResize = () => {
    if (window.innerWidth >= 736) {
      this.setState({
        showMenu: false,
        scrollLock: false,
      })
    }
  }

  handleClick = () => {
    if (window.innerWidth < 736) {
      this.setState({
        showMenu: !this.state.showMenu,
        scrollLock: !this.state.scrollLock,
      })
    }
  }

  render() {
    return (
      <div>
        <Link to="/">
          <img src={mobileLogo} className="mobile-logo" alt="" />
        </Link>
        <LargeMenu className="desktop-nav" breakpoint={this.state.breakpoint}>
          <Menu handleClick={this.handleClick} />
        </LargeMenu>
        <SmallMenu
          className={`mobile-nav ${this.state.showMenu ? 'open' : ''}`}
          breakpoint={this.state.breakpoint}
        >
          {!this.state.showMenu ? (
            <div role="button">
              <TiThMenu onClick={this.handleClick} />
            </div>
          ) : (
            <div role="button">
              <TiTimes onClick={this.handleClick} />
            </div>
          )}
          {this.state.showMenu ? (
            <div>
              <Menu handleClick={this.handleClick} />
            </div>
          ) : null}
        </SmallMenu>
        {this.state.scrollLock ? <ScrollLock /> : null}
      </div>
    )
  }
}

export default Nav
