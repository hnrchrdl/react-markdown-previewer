// @flow

import { INPUT_SET } from '../actions';
import { Action } from 'redux';

export const createUpdateInputAction = (value: string): Action => {
  return { type: INPUT_SET, value };
};
