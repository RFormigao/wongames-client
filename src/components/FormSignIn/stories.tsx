import { Meta, StoryObj } from '@storybook/react'
import FormSignIn from '.'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn
} as Meta

export const Default: StoryObj = {
  render: (props) => (
    <div style={{ width: 300, margin: '0 auto' }}>
      <FormSignIn {...props} />
    </div>
  )
}
