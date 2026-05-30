import { notFound } from "next/navigation";

// The function now expects the UNWRAPPED (awaited) searchParams object
async function getDashboardData(resolvedSearchParams: any) {
  // Wait 2 seconds to trigger loading.tsx
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  // Now we can safely read .crash and .missing
  if (resolvedSearchParams.crash) {
    throw new Error("Oh no! The database completely failed!");
  }

  if (resolvedSearchParams.missing) {
    notFound(); 
  }

  return "Here is your sensitive dashboard data!";
}

// Notice the type update: searchParams is a Promise
export default async function Page({ searchParams }: { searchParams: Promise<any> }) {
  // 1. Await the Promise to unwrap the values
  const resolvedSearchParams = await searchParams;

  // 2. Pass the unwrapped values into your data function
  const data = await getDashboardData(resolvedSearchParams);

  return (
    <div style={{ border: '4px solid gray', padding: '20px', margin: '10px' }}>
      <h2 style={{ color: 'gray' }}>5. Page (The Core Content)</h2>
      <p><strong>Data:</strong> {data}</p>

      <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
        <a href="/dashboard?crash=true" style={{ color: 'red' }}>[ Trigger a Crash ]</a>
        <a href="/dashboard?missing=true" style={{ color: 'purple' }}>[ Trigger a 404 ]</a>
      </div>
    </div>
  );
}