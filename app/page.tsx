"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ padding: 40 }}>
      <h1>Panel Seç</h1>

      <button onClick={() => router.push("/admin")}>
        Admin Paneli
      </button>

      <br /><br />

      <button onClick={() => router.push("/doctor")}>
        Doktor Paneli
      </button>

      <br /><br />

      <button onClick={() => router.push("/user")}>
        Hasta Paneli
      </button>
    </div>
  );
}
