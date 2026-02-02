"use client";

import { useState } from "react";

export default function PoliklinikPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  async function ekle(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim()) {
      setMessage("Poliklinik adı boş olamaz");
      return;
    }

    await fetch("/api/poliklinik", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    setName("");
    setMessage("✅ Poliklinik eklendi");
  }

  return (
    <div style={{ padding: 40 }}>
      <h3>🏥 Poliklinik Ekle</h3>

      <form onSubmit={ekle}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Poliklinik adı"
        />

        <button type="submit" style={{ marginLeft: 10 }}>
          Ekle
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
