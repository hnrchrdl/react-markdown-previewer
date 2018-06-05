import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createUpdateInputAction } from '../actions/input';

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
`;
const Textarea = styled.textarea`
  width: 100%;
  height: 300px;
  box-sizing: border-box;
  border: 3px solid #eee;
  padding: 20px;
  outline: none;
`;

class Input extends React.Component {
  handleInputChange = (event: SyntheticEvent) => {
    this.props.updateInputValue(event.target.value);
  };
  render() {
    return (
      <InputContainer>
        <Textarea
          id="editor"
          placeholder="Begin typing here ..."
          value={this.props.inputValue}
          onChange={this.handleInputChange}
        />
      </InputContainer>
    );
  }
}

const mapStateToProps = state => ({ inputValue: state.io.input });
const mapDispatchToProps = dispatch => ({
  updateInputValue(value) {
    dispatch(createUpdateInputAction(value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
