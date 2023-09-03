import van from 'vanjs-core';
import { PageWrapper } from '../components/PageWrapper';
import { Link } from '../components/Link';

const { h1, p } = van.tags;

const Home = () =>
  PageWrapper(
    {},
    h1('Home'),
    p(
      'Welcome to my awesome website built with ',
      Link({ href: 'https://vanjs.org/' }, 'vanjs'),
      ', ',
      Link({ href: 'https://www.typescriptlang.org/' }, 'typescript'),
      ', ',
      Link({ href: 'https://parceljs.org/' }, 'parcel'),
      ' and, ',
      Link({ href: 'https://cva.style/docs' }, 'cva'),
      '.'
    )
  );

van.add(document.body, Home());
