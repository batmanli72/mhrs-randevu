"use client";

import Link from "next/link";

export default function AdminPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>👑 Admin Paneli</h1>

      <ul style={{ marginTop: 20 }}>
        <li>
          <Link href="/admin/poliklinik">
            🏥 Poliklinik Ekle / Sil
          </Link>
        </li>

        <li>
          <Link href="/admin/doktor">
            🩺 Doktor Ekle / Sil
          </Link>
        </li>

        <li>
          <Link href="/admin/atama">
            🔗 Polikliniğe Doktor Ata
          </Link>
        </li>
      </ul>
    </div>
  );
}
