/**
 * @class Button
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'

import variables  from './utils/variables.js'

const fontColor = 'palevioletred'

const linkedButtonCss = css`
  border-color: transparent;
  color: ${variables.linkColor};

  &:hover {
    background-color: transparent;
    color: ${variables.linkColorHover};
  }
`

const StyledButton = styled.button`
  padding: ${variables.padding}/2 ${variables.padding};
  border: ${variables.borderStyle};
  color: ${ fontColor };
  text-decoration: none;
  text-align: center;
  background: transparent;
  ${props => props.styleAs === 'link' ? linkedButtonCss : ''}
`

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
    styleAs: PropTypes.string,
    className: PropTypes.string,
  }

  render() {
    const {
      text,
      styleAs,
    } = this.props

    return (
      <StyledButton className={'test'} {...this.props}>
        { this.props.text || this.props.children }
      </StyledButton>
    )
  }
}
