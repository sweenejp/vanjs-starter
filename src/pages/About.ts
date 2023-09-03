import van from 'vanjs-core';
import { PageWrapper } from '../components/PageWrapper';
import { Link } from '../components/Link';

const { h1, p } = van.tags;

const About = () =>
  PageWrapper(
    {},
    h1('About'),
    p(Link({ href: 'https://github.com/sweenejp/' }, 'Jimmy Sweeney'))
  );

van.add(document.body, About());
