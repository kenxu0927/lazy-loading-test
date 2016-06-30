import React from 'react'
import R from 'ramda'
import Rx from 'rx-lite'
import tape from 'tape'
import addAssertions from 'extend-tape'
import jsxAssertions from '@kwltrs/tape-jsx-assertions'
import {shallow, mount} from 'enzyme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import jsdom from 'jsdom'

// Extend expect assertion library to include JSX support
export const test = addAssertions(tape, jsxAssertions)

// Wrapper for Enzyme to provide muiTheme context (required for Components that use Material UI)
export const shallowWithContext = node => shallow(<MuiThemeProvider muiTheme={getMuiTheme()}>{node}</MuiThemeProvider>)
export const mountWithContext = node => mount(<MuiThemeProvider muiTheme={getMuiTheme()}>{node}</MuiThemeProvider>)

/* --- IMPURE -------------------- */

// Get the dom ready
export const getJsdomReady = () => {
  const doc = jsdom.jsdom('<!doctype html><html><body></body></html>', () => console.log('DOM ready!'))
  global.document = doc
  global.window = doc.defaultView
  global.navigator = global.window.navigator
}

// Mock state
export const setupMockState$$ = wrapper => {
  return Rx.Observable.fromEvent(global.document, 'state:change')
    .map(e => e.detail)
    .map(state => {
      wrapper.setProps({rootState: state})
      return state
    })
}

// export const removeMockState = handler => {
//   global.document.removeEventListener('state:change', handler)
// }
