import React from 'react';
import Output from './Output';
import renderer from 'react-test-renderer';
import store from '../store';

test('App renders and matches snapshot', () => {
  const component = renderer.create(<Output store={store} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
