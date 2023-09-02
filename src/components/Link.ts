import van, { ChildDom, Props } from 'vanjs-core';
import * as linkClasses from './Link.module.css';
import { cva } from 'class-variance-authority';

const { a } = van.tags;

interface LinkProps extends Props {
  intent?: 'primary' | 'secondary';
}

const linkCva = cva(linkClasses.base, {
  variants: {
    intent: { primary: linkClasses.primary, secondary: linkClasses.secondary },
  },
  defaultVariants: { intent: 'primary' },
});

export const Link = (props: LinkProps, ...children: ChildDom[]) => {
  const { intent = 'primary' } = props;

  return a({ class: linkCva({ intent }), ...props }, ...children);
};
