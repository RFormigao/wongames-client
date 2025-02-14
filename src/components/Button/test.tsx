import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>By Now</Button>)
    expect(screen.getByRole('button', { name: /by now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">By Now</Button>)
    expect(screen.getByRole('button', { name: /by now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">By Now</Button>)
    expect(screen.getByRole('button', { name: /by now/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a fullwidth version', () => {
    renderWithTheme(<Button fullWidth>By Now</Button>)
    expect(screen.getByRole('button', { name: /by now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button fullWidth icon={<AddShoppingCart data-testid="icon" />}>
        By Now
      </Button>
    )

    expect(screen.getByText(/by now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
