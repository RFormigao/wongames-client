import { Meta, StoryObj } from '@storybook/react'
import { Email } from '@styled-icons/material-outlined'
import TextField from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
    icon: <Email />
  },
  argTypes: {
    onInput: { action: 'changed' }
  }
} as Meta

export const Default: StoryObj = {}

export const withError: StoryObj = {
  args: {
    error: 'Ops...something is wrong'
  }
}
