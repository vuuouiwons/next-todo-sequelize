"use client"; // Error boundaries must be client components

import { useEffect } from "react";

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div style={{ border: '4px solid red', padding: '20px', margin: '10px', backgroundColor: '#ffe6e6' }}>
      <h2 style={{ color: 'red' }}>3. Error Boundary (Caught a Crash!)</h2>
      <p>{error.message}</p>
      <button 
        onClick={() => reset()}
        style={{ padding: '5px 10px', cursor: 'pointer' }}
      >
        Try to recover
      </button>
    </div>
  );
}