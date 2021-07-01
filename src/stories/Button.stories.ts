import { Story, Meta } from '@storybook/web-components';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
  },
} as Meta;

const Template: Story<Partial<ButtonProps>> = (args) => Button(args);

export const Primary = Story.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Story.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Story.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Story.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
