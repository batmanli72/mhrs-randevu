"use client";

import { useEffect, useState } from "react";

type Poliklinik = {
  id: number;
  name: string;
};

export default function DoctorAdminPage() {
  const [name, setName] = useState("");
  const [poliklinikId, setPoliklinikId] = useState<number | "">("");
  const [poliklinikler, setPoliklinikler] = useState<Poliklinik[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/poliklinik")
      .then((res) => res.json())
      .then(setPoliklinikler);
  }, []);

  async function ekle(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim() || !poliklinikId) {
      setMessage("Doktor adı ve poliklinik seçilmeli");
      return;
    }

    await fetch("/api/doctor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        poliklinikId,
      }),
    });

    setName("");
    setPoliklinikId("");
    setMessage("✅ Doktor eklendi");
  }

  return (
    <div style={{ padding: 40 }}>
      <h3>🩺 Doktor Ekle</h3>

      <form onSubmit={ekle}>
        <input
          placeholder="Doktor adı"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          value={poliklinikId}
          onChange={(e) => setPoliklinikId(Number(e.target.value))}
          style={{ marginLeft: 10 }}
        >
          <option value="">Poliklinik seç</option>
          {poliklinikler.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>

        <button type="submit" style={{ marginLeft: 10 }}>
          Ekle
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
