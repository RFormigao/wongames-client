import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'

import Highlight from '.'
import * as S from './styles'

const props = {
  title: `Read Dead it's back`,
  subtitle: `Come see John's new adventures`,
  buttonLabel: 'Buy Now',
  buttonLink: '/rdr2',
  backgroundImage: '/img/storybook/red-dead-img.jpg'
}

describe('<Highlight />', () => {
  it('should render the headings and button', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /Read Dead/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Come see/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Buy Now/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should render float image', () => {
    renderWithTheme(<Highlight {...props} floatImage="/float-image.png" />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png'
    )
  })

  it('should render align right a by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should render align left', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} alignment="left" />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
  })
})
