import { Meta, StoryObj } from '@storybook/react'
import Highlight, { HighlightProps } from '.'
import item from './mock'

const defaultArgs = item

export default {
  title: 'Highlight',
  component: Highlight,
  args: defaultArgs
} as Meta

export const Default: StoryObj<HighlightProps> = {
  render: (props) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <Highlight {...props} />
    </div>
  )
}

export const WithFloatImage: StoryObj<HighlightProps> = {
  render: (props) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <Highlight {...props} />
    </div>
  ),
  args: {
    ...defaultArgs,
    floatImage: '/img/storybook/red-dead-float.png'
  }
}
