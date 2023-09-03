import van from 'vanjs-core';
import * as navClasses from './Nav.module.css';
import { Link } from './Link';

const { li, nav, ul } = van.tags;

export const Nav = () => {
  const { pathname } = location;

  return nav(
    ul(
      { class: navClasses.base },
      li(
        Link(
          { href: '/', intent: pathname === '/' ? 'primary' : 'secondary' },
          'Home'
        )
      ),
      li(
        Link(
          {
            href: '/blog',
            intent: pathname === '/blog' ? 'primary' : 'secondary',
          },
          'Blog'
        )
      ),
      li(
        Link(
          {
            href: '/about',
            intent: pathname === '/about' ? 'primary' : 'secondary',
          },
          'About'
        )
      )
    )
  );
};
