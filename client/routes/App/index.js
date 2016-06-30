import React from 'react'
import { Router, Route, Link } from 'react-router'
// import getMuiTheme from 'material-ui/styles/getMuiTheme'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = ({children, location}) => {
  return (

      <div>
        <div style={{backgroundColor: '#f8f8f8', height: '54px'}} className="border-bottom border-light-silver center">
          <img style={{paddingTop: '0px'}} src="/client/assets/images/fake-terapeak-header.jpg" width="1320px" />
        </div>
        <ul>
          <li><Link to="/home">Home(Bulk Scoring)</Link></li>
          <li><Link to="/advertising">Advertising</Link></li>
        </ul>
        <div>{children}</div>
      </div>

  )
}

export default App
