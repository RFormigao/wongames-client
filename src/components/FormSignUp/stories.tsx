import { Meta, StoryObj } from '@storybook/react'
import FormSignUp from '.'

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp
} as Meta

export const Default: StoryObj = {
  render: (props) => (
    <div style={{ width: 300, margin: '0 auto' }}>
      <FormSignUp {...props} />
    </div>
  )
}
