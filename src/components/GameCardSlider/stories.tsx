import { Meta, StoryObj } from '@storybook/react'
import GameCardSlider, { GameCardSliderProps } from '.'
import items from './mock'

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
