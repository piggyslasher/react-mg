import styled from 'styled-components'
import variables from './utils/variables.js'

export const H = styled.h1`
  margin: 1.414rem 0 .5rem;
  font-weight: inherit;
  line-height: 1.42;
`
export const H1 = H.withComponent('h1').extend`
  margin-top: 0;
  font-size: 3.998rm;
`

export const H2 = H.withComponent('h2').extend`
  font-size: 2.827rm;
`

export const H3 = H.withComponent('h3').extend`
  font-size: 1.999rm;
`

export const H4 = H.withComponent('h4').extend`
  font-size: 1.414rm;
`

export const H5 = H.withComponent('h5').extend`
  font-size: 1.121rm;
`

export const H6 = H.withComponent('h6').extend`
  font-size: .88rem;
`

export const A = styled.a`
  color: ${variables.linkColor};

  &:hover,
  &:focus,
  &:active {
    color: darken($link-color, 10%);
  }
`
