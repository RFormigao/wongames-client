import { Meta, StoryObj } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

const defaultArgs = {
  title: `Population Zero`,
  developer: `Other Ocean`,
  img: '/img/project-winter.png',
  price: '$215,00',
  promotionalPrice: 'R$ 15,00'
}

export default {
  title: 'GameCard',
  component: GameCard,
  args: defaultArgs,
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<GameCardProps> = {
  render: (props) => (
    <div style={{ maxWidth: '30rem' }}>
      <GameCard {...props} />
    </div>
  )
}

export const WithRibbon: StoryObj<GameCardProps> = {
  render: (props) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...props} />
    </div>
  ),
  args: {
    ribbon: '20% OFF',
    ribbonSize: 'small',
    ribbonColor: 'primary'
  }
}
