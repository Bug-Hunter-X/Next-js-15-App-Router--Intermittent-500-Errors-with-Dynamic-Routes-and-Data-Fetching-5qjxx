```javascript
// pages/post/[id].js
import { Suspense } from 'react';

async function getData(id) {
  // Simulate an API call
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    id: id,
    title: `Post ${id}`
  };
}

export default async function Post({params}) {
  const data = await getData(params.id);
  return (
    <div><h1>{data.title}</h1></div>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: `Post ${params.id}`
  };
}
```