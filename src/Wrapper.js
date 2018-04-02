/**
 * @class Wrapper
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styledNormalize from 'styled-normalize'
import injectGlobal from 'styled-components'

injectGlobal`
  ${styledNormalize}
`

export default class Banner extends Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}
