export default function DashboardTemplate({ children }: { children: React.ReactNode }) {
  const mountTime = new Date().toLocaleTimeString();

  return (
    <div style={{ border: '4px solid green', padding: '20px', margin: '10px' }}>
      <h2 style={{ color: 'green' }}>2. Template (Remounts)</h2>
      <p style={{ fontSize: '12px' }}>Component mounted at: {mountTime}</p>
      {children}
    </div>
  );
}