import { Meta, StoryObj } from '@storybook/react'

import highlightMock from '@/components/Highlight/mock'
import gamesMock from '@/components/GameCardSlider/mock'

import Showcase from '.'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '20px auto 0' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj = {
  args: {
    title: 'Most Popular',
    highlight: highlightMock,
    games: gamesMock
  }
}

export const WithoutHighlight: StoryObj = {
  args: {
    title: 'Most Popular',
    games: gamesMock
  }
}

export const WithoutGames: StoryObj = {
  args: {
    title: 'Most Popular',
    highlight: highlightMock
  }
}
