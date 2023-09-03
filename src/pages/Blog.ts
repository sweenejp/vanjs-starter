import van from 'vanjs-core';
import { PageWrapper } from '../components/PageWrapper';

const { h1, p, div } = van.tags;

interface PostI {
  body: string;
  id: number;
  title: string;
  userId: string;
}

const fetchPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await res.json();

  return json;
};

const Blog = () => {
  const posts = van.state<PostI[]>([]);

  van.derive(async () => {
    const data = await fetchPost();

    posts.val = data;
  });

  return PageWrapper({}, h1('Blog'), () =>
    div(
      { class: 'posts' },
      posts.val.map((post) => p(post.title))
    )
  );
};

van.add(document.body, Blog());
