import * as React from 'react';
import Button from '@/components/atoms/button';

export const iconButtonGroup = () => (
  <div className="d-inline-flex">
    <Button size="tiny" icon="content_copy" aria-label="Copy" className="mr-4" tooltip="Copy" />
    <Button size="tiny" icon="content_paste" aria-label="Paste" className="mr-4" tooltip="Paste" />
    <Button size="tiny" icon="delete" aria-label="Delete" tooltip="Delete" />
  </div>
);

export default {
  title: 'Components/Button/Icon Button Group',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'A pattern using tiny icon buttons in a group.',
        a11yProps: ` 
        **aria-label:**
        <br/> 
        - Add \`aria-label='Copy'\` on button with *copy* icon to describe the action of button.
        <br/>
        - Add \`aria-label='Paste'\` on button with *paste* icon to describe the action of button.
        <br/>
        - Add \`aria-label='Delete'\` on button with *delete* icon to describe the action of button.
        `,
      },
    },
  },
};
