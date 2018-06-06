import React from 'react';
import IOContainer from './IOContainer';
import renderer from 'react-test-renderer';

test('App renders and matches snapshot', () => {
  const component = renderer.create(<IOContainer />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
