"use client";

import { useState } from "react";

export default function RandevuAl() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  function isWeekend(selectedDate: string) {
    const day = new Date(selectedDate).getDay();
    return day === 0 || day === 6; // Pazar / Cumartesi
  }

  async function handleSubmit() {
    if (!date || !time) {
      setError("Tarih ve saat seçmelisin");
      return;
    }

    if (isWeekend(date)) {
      setError("Hafta sonu randevu alınamaz");
      return;
    }

    setError("");

    await fetch("/api/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        patientName: "Ali Hasta",
        doctorName: "Dr. Ahmet",
        date: `${date} ${time}`,
      }),
    });

    alert("✅ Randevu oluşturuldu");
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>📅 Randevu Al</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginTop: 10 }}>
        <label>Tarih:</label><br />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div style={{ marginTop: 10 }}>
        <label>Saat:</label><br />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <button
        onClick={handleSubmit}
        style={{ marginTop: 20 }}
      >
        Randevu Oluştur
      </button>
    </div>
  );
}
