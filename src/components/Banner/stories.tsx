import { Meta, StoryObj } from '@storybook/react'
import Banner, { BannerProps } from '.'

const defaultArgs = {
  img: 'https://source.unsplash.com/usr/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

export default {
  title: 'Banner',
  component: Banner,
  args: defaultArgs
} as Meta<BannerProps>

export const Default: StoryObj<BannerProps> = {
  render: (props) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <Banner {...props} />
    </div>
  ),
  args: defaultArgs
}

export const WithRibbon: StoryObj<BannerProps> = {
  render: (props) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <Banner {...props} />
    </div>
  ),
  args: {
    ...defaultArgs,
    ribbon: '20% OFF',
    ribbonSize: 'normal',
    ribbonColor: 'primary'
  }
}
