export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header style={{ padding: 20, background: "#eee" }}>
        <h2>Hasta Alanı</h2>
      </header>
      <main>{children}</main>
    </div>
  );
}
