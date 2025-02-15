import { Meta, StoryObj } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

const defaultArgs = {
  title: `Read Dead it's back`,
  subtitle: `Come see John's new adventures`,
  buttonLabel: 'Buy Now',
  buttonLink: '/rdr2',
  backgroundImage: '/img/red-dead-img.jpg'
}

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
    floatImage: '/img/red-dead-float.png'
  }
}
