import styled, { css, DefaultTheme } from 'styled-components'
import { LineColorProps } from '.'

type WrapperProps = {
  color?: 'white' | 'black'
  $lineLeft?: boolean
  $lineBottom?: boolean
  $size: 'small' | 'medium' | 'huge'
  $lineColor: 'primary' | 'secondary'
}

export const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,

  lineLeft: (theme: DefaultTheme, lineColor: LineColorProps) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,

  lineBottom: (theme: DefaultTheme, lineColor: LineColorProps) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1rem;
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
  `
}

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, color, $lineLeft, $lineBottom, $size, $lineColor }) => css`
    color: ${theme.colors[color!]};

    ${$lineLeft && wrapperModifiers.lineLeft(theme, $lineColor)}
    ${$lineBottom && wrapperModifiers.lineBottom(theme, $lineColor)}
    ${!!$size && wrapperModifiers[$size](theme)}
  `}
`
