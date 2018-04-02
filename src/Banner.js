/**
 * @class Banner
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

import styled from 'styled-components'

export default class Banner extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.bar}>
        Component Banner: {text}
      </div>
    )
  }
}
