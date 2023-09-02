import van, { ChildDom, Props } from 'vanjs-core';
import { Nav } from './Nav';

const { main } = van.tags;

interface PageWrapperProps extends Props {}

export const PageWrapper = (props: PageWrapperProps, ...children: ChildDom[]) =>
  main({ ...props }, Nav(), ...children);
