import van from 'vanjs-core';
import { PageWrapper } from '../components/PageWrapper';

const { h1 } = van.tags;

const Home = () => PageWrapper({}, h1('Home'));

van.add(document.body, Home());
