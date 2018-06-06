import React from 'react';
import Input from './Input';
import renderer from 'react-test-renderer';
import store from '../store';

test('App renders and matches snapshot', () => {
  const component = renderer.create(<Input store={store} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
