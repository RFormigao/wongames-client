import { Meta, StoryObj } from '@storybook/react'
import GameCardSlider, { GameCardSliderProps } from '.'

const items = [
  {
    title: `Population Zero`,
    developer: `Other Ocean`,
    img: '/img/storybook/project-winter.png',
    price: '$215,00',
    promotionalPrice: 'R$ 15,00'
  },
  {
    title: `Population Zero`,
    developer: `Other Ocean`,
    img: '/img/storybook/project-winter.png',
    price: '$215,00',
    promotionalPrice: 'R$ 15,00'
  },
  {
    title: `Population Zero`,
    developer: `Other Ocean`,
    img: '/img/storybook/project-winter.png',
    price: '$215,00',
    promotionalPrice: 'R$ 15,00'
  },
  {
    title: `Population Zero`,
    developer: `Other Ocean`,
    img: '/img/storybook/project-winter.png',
    price: '$215,00',
    promotionalPrice: 'R$ 15,00'
  },
  {
    title: `Population Zero`,
    developer: `Other Ocean`,
    img: '/img/storybook/project-winter.png',
    price: '$215,00',
    promotionalPrice: 'R$ 15,00'
  },
  {
    title: `Population Zero`,
    developer: `Other Ocean`,
    img: '/img/storybook/project-winter.png',
    price: '$215,00',
    promotionalPrice: 'R$ 15,00'
  },
  {
    title: `Population Zero`,
    developer: `Other Ocean`,
    img: '/img/storybook/project-winter.png',
    price: '$215,00',
    promotionalPrice: 'R$ 15,00'
  }
]

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<GameCardSliderProps> = {
  render: (props) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameCardSlider {...props} />
    </div>
  )
}
