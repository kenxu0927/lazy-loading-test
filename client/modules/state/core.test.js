import test from 'tape'
import {
  getState
} from './core'

test('getState()', assert => {
  const id = '/setup-1'
  const rootState = {
    "/setup-1": {
      isValid: null,
      isTouched: false,
      errorMsgs: [
        'This field is required',
        'Project name must be camelcased'
      ]
    }
  }
  const actual = getState(rootState, id)
  const expected = {
    isValid: null,
    isTouched: false,
    errorMsgs: [
      'This field is required',
      'Project name must be camelcased'
    ]
  }

  assert.deepEqual(actual, expected,
    `getState() should return the state obj of a given id`)

  /* -------------------- */

  const id2 = '/setup-x'
  const rootState2 = {
    "/setup-1": {
      isValid: null,
      isTouched: false,
      errorMsgs: [
        'This field is required',
        'Project name must be camelcased'
      ]
    }
  }
  const actual2 = getState(rootState2, id2)
  const expected2 = {}

  assert.deepEqual(actual2, expected2,
    `Given a non-existing id, getState() should return {}`)

  /* -------------------- */

  const id3 = '/setup-x'
  const rootState3 = undefined
  const actual3 = getState(rootState3, id3)
  const expected3 = {}

  assert.deepEqual(actual3, expected3,
    `Given an undefined rootState, getState() should return {}`)

  /* -------------------- */

  const id4 = '/setup-x'
  const rootState4 = {}
  const actual4 = getState(rootState4, id4)
  const expected4 = {}

  assert.deepEqual(actual4, expected4,
    `Given a rootState of {}, getState() should return an
    {}`)

  assert.end()
})
