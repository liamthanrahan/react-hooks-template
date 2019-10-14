import React, { Component } from 'react'
import { injectGlobal } from 'emotion'
import styled from '@emotion/styled'
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import { FaHome, FaInfo } from 'react-icons/fa'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Home from './Home'
import About from './About'
import Animated from './Animated'

const Container = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const Top = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
`

const Bottom = styled.div`
  flex: 1;
  display: flex;
  overflow-y: auto;
`

const Header = styled.h1`
  margin-right: 10px;
`

const NavBar = styled.nav`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`

const StyledLink = styled(Link)`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`

const Label = styled.span`
  margin-left: 5px;
  flex: 1;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: green;
  }
`

injectGlobal`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    margin: 0;
    font-family: Verdana, Geneva, sans-serif;
    font-weight: 400;
  }

  html,
  body,
  #root {
    height: 100%;
    position: relative;
  }
`

function App() {
  const classes = makeStyles(theme => ({
    content: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    root: {
      display: 'flex',
    },
  }))

  return (
    <Container className={classes.root}>
      <Top>
        <Header>React App Template</Header>
        <NavBar>
          <StyledLink to="/">
            <Label>Home</Label>
          </StyledLink>
          <StyledLink to="/about">
            <Label>About</Label>
          </StyledLink>
          <StyledLink to="/animated">
            <Label>Animated</Label>
          </StyledLink>
        </NavBar>
      </Top>
      <Divider />
      <Bottom>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/animated" component={Animated} />
        </Switch>
      </Bottom>
    </Container>
  )
}

export default App
