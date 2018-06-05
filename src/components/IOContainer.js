import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 50%;
`;

export default props => <Container>{props.children}</Container>;
