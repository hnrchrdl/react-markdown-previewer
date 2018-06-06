import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from '../store';

import IOContainer from './IOContainer';
import Input from './Input';
import Output from './Output';

import logo from '../logo.svg';
import styled from 'styled-components';

const AppContainer = styled.div``;
const Header = styled.header`
  position: relative;
`;
const Main = styled.main`
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.img`
  height: 100%;
`;
const Headline = styled.h1`
  font-family: sans-serif;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer>
          <Header>
            <Headline>React Markdown Previewer</Headline>
          </Header>
          <Main>
            <IOContainer>
              <Input />
            </IOContainer>
            <IOContainer>
              <Output />
            </IOContainer>
          </Main>
        </AppContainer>
      </Provider>
    );
  }
}

export default App;
