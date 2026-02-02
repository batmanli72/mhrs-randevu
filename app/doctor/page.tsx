"use client";

import Link from "next/link";

export default function DoctorPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>🩺 Doktor Paneli</h1>

      <ul style={{ marginTop: 20 }}>
        <li>
          <Link href="/doctor/randevular">
            📅 Randevuları Gör
          </Link>
        </li>

        <li>
          <Link href="/doctor/onay">
            ✅ Randevu Onayla
          </Link>
        </li>
      </ul>
    </div>
  );
}
