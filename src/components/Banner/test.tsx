import { screen } from '@testing-library/react'

import Banner from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <Banner
        img="https://source.unsplash.com/user/willianjusten/1042x580"
        title="Defy death"
        subtitle="<p>Play the new <strong>CrashLands</strong> season</p>"
        buttonLabel="Buy now"
        buttonLink="/games/defy-death"
      />
    )

    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Play the new/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
