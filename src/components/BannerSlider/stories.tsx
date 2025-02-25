import { Meta, StoryObj } from '@storybook/react'
import BannerSlider, { BannerSliderProps } from '.'

const items = [
  {
    img: '/img/storybook/red-dead-img.jpg',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: '/img/storybook/red-dead-img.jpg',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  {
    img: '/img/storybook/red-dead-img.jpg',
    title: 'Defy death 3',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<BannerSliderProps> = {
  render: (props) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <BannerSlider {...props} />
    </div>
  )
}
