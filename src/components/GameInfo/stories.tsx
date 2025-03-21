import { Meta, StoryObj } from '@storybook/react'
import GameInfo, { GameInfoProps } from '.'
import mockGame from './mock'

export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGame
} as Meta

export const Default: StoryObj<GameInfoProps> = {
  render: (props) => (
    <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
      <GameInfo {...props} />
    </div>
  )
}
