"use client";

import { useEffect, useState } from "react";
import type { Appointment } from "@/app/lib/types";

export default function DoctorRandevular() {
  const [data, setData] = useState<Appointment[]>([]);

  useEffect(() => {
    fetch("/api/appointment")
      .then((res) => res.json())
      .then((result: Appointment[]) => setData(result));
  }, []);

  return (
    <div>
      <h2>🩺 Randevular</h2>

      <ul>
        {data.map((r) => (
          <li key={r.id}>
            {r.patientName} – {r.date} –{" "}
            {r.approved ? "✅ Onaylı" : "⏳ Bekliyor"}
          </li>
        ))}
      </ul>
    </div>
  );
}

