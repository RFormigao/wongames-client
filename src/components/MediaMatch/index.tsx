import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type breakpoint = keyof DefaultBreakpoints

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)` display: block `}
  `,
  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)` display: block `}
  `
}

export type MediaMatchProps = {
  $lessThan?: breakpoint
  $greaterThan?: breakpoint
}

export default styled.div<MediaMatchProps>`
  ${({ $lessThan, $greaterThan }) => css`
    display: none;

    ${!!$lessThan && mediaMatchModifiers.lessThan($lessThan)}
    ${!!$greaterThan && mediaMatchModifiers.greaterThan($greaterThan)}
  `}
`
