export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ border: '4px solid blue', padding: '20px', margin: '10px' }}>
      <h2 style={{ color: 'blue' }}>1. Layout (Persistent)</h2>
      <nav style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
        <a href="/dashboard">Dashboard Home</a>
        {/* Navigating here proves the layout stays still, but the template resets */}
        <a href="/dashboard?refresh=true">Refresh Route</a>
      </nav>
      {children}
    </div>
  );
}