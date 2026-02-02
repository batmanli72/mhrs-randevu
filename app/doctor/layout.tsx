export default function DoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header style={{ padding: 20, background: "#f3f3f3" }}>
        <h2>Doktor Alanı</h2>
      </header>
      <main>{children}</main>
    </div>
  );
}
