'use strict'

import 'styles/main.scss'

import React from 'react'
import { render } from 'react-dom'
import {Router, Route, IndexRoute, Redirect, Link, browserHistory, RouterContext} from 'react-router'

import {state$} from './modules/state/observables'
import {changeState} from './modules/state/events'

const scoringRoute = {
	path: 'home',

	getComponents(nextState, callback) {
    require.ensure([], function (require) {
      callback(null, require('./routes/App/Home').default)
    })
  },
}

const advertisingRoute = {
	path: 'advertising',

	getComponents(nextState, callback) {
    require.ensure([], function (require) {
      callback(null, require('./routes/App/Advertising').default)
    })
  },
}

const routes = {
	path: '/',

	getChildRoutes(partialNextState, callback) {
      require.ensure([], function (require) {
        callback(null, [
          scoringRoute, advertisingRoute
        ])
      })
    },

	getComponents(nextState, callback) {
    require.ensure([], function (require) {
      callback(null, require('./routes/App/').default)
    })
  },

  getIndexRoute(partialNextState, callback) {
    require.ensure([], function (require) {
      callback(null, {
        component: require('./routes/App/Home/').default,
      })
    })
  },
}

state$.subscribe(rootState => {
  const createElement = (Component, props) => {
    return <Component {...props} rootState={rootState} />
  }
  render((
    <Router createElement={createElement} history={browserHistory} >
    	{routes}
    </Router>
  ), document.getElementById('js-main'))
})

// Initiate State
changeState('global', {})
