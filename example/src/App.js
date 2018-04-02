import React, { Component } from 'react'

import { Button } from 'react-mg'

export default class App extends Component {
  render () {
    return (
      <div>
        <Button
          styleAs='link'
        >
          A test
        </Button>
      </div>
    )
  }
}
