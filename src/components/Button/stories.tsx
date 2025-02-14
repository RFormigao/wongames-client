import { Meta, StoryObj } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart'

import Button from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: StoryObj = {
  args: {
    children: 'Buy Now'
  }
}

export const withIcon: StoryObj = {
  args: {
    size: 'small',
    children: 'Buy Now',
    icon: <AddShoppingCart />
  }
}

export const asLink: StoryObj = {
  args: {
    size: 'large',
    children: 'Buy Now',
    as: 'a',
    href: '/link'
  }
}
