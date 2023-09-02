import van from 'vanjs-core';
import { PageWrapper } from '../components/PageWrapper';

const { h1 } = van.tags;

const Blog = () => PageWrapper({}, h1('Blog'));

van.add(document.body, Blog());
