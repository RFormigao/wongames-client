import React from 'react'
import * as S from './styles'

export type LineColorProps = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  size?: 'small' | 'medium'
  lineColor?: LineColorProps
  lineLeft?: boolean
  lineBottom?: boolean
}

const Heading = ({
  children,
  color = 'white',
  size = 'medium',
  lineColor = 'primary',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    $lineLeft={lineLeft}
    $lineBottom={lineBottom}
    $lineColor={lineColor}
    $size={size}
  >
    {children}
  </S.Wrapper>
)

export default Heading
