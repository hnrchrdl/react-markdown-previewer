// @flow

import { INPUT_SET } from '../actions';
import { Action } from 'redux';

const defaultState = {
  input: `
  # a header (H1 size)
  ## a sub header (H2 size)
  [a link]
  \`inline code\`  
  \`\`\`a code block\`\`\`  
  1. a list item
  > a blockquote  
  ![an image](https://cdn.vox-cdn.com/thumbor/YqrPXWiAFv9TuM0tUi_i1pZEPyE=/0x0:512x512/920x0/filters:focal(0x0:512x512):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/6808705/Cat_101.0.png)
  **and bolded text**`
};

export default function(
  state: { input: string } = defaultState,
  action: Action
) {
  switch (action.type) {
    case INPUT_SET:
      return {
        ...state,
        input: action.value
      };
    default:
      return state;
  }
}
