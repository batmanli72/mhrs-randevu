export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>👑 Admin Panel</h1>
      <nav>
        <a href="/admin/poliklinik">Poliklinik</a> |{" "}
        <a href="/admin/doktor">Doktor</a> |{" "}
        <a href="/admin/atama">Atama</a>
      </nav>
      <hr />
      {children}
    </div>
  );
}
