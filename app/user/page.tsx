"use client";

import Link from "next/link";

export default function UserPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>👤 Hasta Paneli</h1>

      <ul style={{ marginTop: 20 }}>
        <li>
          <Link href="/user/randevu">
            📅 Randevu Al
          </Link>
        </li>

        <li>
          <Link href="/user/randevularim">
            📋 Randevularım
          </Link>
        </li>
      </ul>
    </div>
  );
}
