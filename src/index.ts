import fetch from 'unfetch';

async function login() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: any = await res.json();
  console.log({ data });
}

export { login };
