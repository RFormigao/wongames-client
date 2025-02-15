import { Meta, StoryObj } from '@storybook/react'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta<RibbonProps>

export const Default: StoryObj<RibbonProps> = {
  render: (props) => (
    <div
      style={{
        width: '40rem',
        height: '40rem',
        position: 'relative',
        background: '#888'
      }}
    >
      <Ribbon {...props} />
    </div>
  )
}
