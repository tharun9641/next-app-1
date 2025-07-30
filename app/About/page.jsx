// This file lives in app/about/page.tsx
// Runs only on the server by default

async function getData() {
  // Simulate fetching data from an API or database
  return {
    message: "Hello from the server!",
    time: new Date().toLocaleString(),
  };
}

export default async function AboutPage() {
  const data = await getData();

  return (
    <main>
      <h1>About</h1>
      <p>{data.message}</p>
      <p>Time on the server: {data.time}</p>
    </main>
  );
}
