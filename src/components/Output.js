import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const OutputContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: #eee;
`;

const Output = props => (
  <OutputContainer id="preview">
    <ReactMarkdown source={props.input} />
  </OutputContainer>
);

const mapStateToProps = state => ({
  input: state.io.input
});

export default connect(mapStateToProps)(Output);
