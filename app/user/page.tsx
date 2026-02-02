"use client";
import { useState } from 'react';

export default function HastaPaneli() {
  // Örnek Doktor Listesi (Normalde Admin'in eklediği listeden gelir)
  const [doktorlar] = useState([
    { id: 1, ad: "Dr. Ahmet Yılmaz", poliklinik: "Dahiliye" },
    { id: 2, ad: "Dr. Ayşe Kaya", poliklinik: "Göz" },
    { id: 3, ad: "Dr. Mehmet Öz", poliklinik: "Kardiyoloji" }
  ]);

  const [seciliDoktor, setSeciliDoktor] = useState("");
  const [tarih, setTarih] = useState("");
  const [saat, setSaat] = useState("");

  // Geçmiş tarihleri engellemek için bugünün tarihini alalım (YYYY-MM-DD formatında)
  const bugun = new Date().toISOString().split('T')[0];

  const randevuAl = (e) => {
    e.preventDefault();
    
    const secilenTarih = new Date(tarih);
    const gun = secilenTarih.getDay(); // 0: Pazar, 6: Cumartesi

    // 1. Hafta Sonu Kontrolü
    if (gun === 0 || gun === 6) {
      alert("Hafta sonları randevu alınamaz. Lütfen hafta içi bir gün seçiniz.");
      return;
    }

    // 2. Özel Gün Kontrolü (Örnek: 1 Ocak, 29 Ekim vb.)
    const ayGun = tarih.substring(5); // "MM-DD" formatını alır
    const ozelGunler = ["01-01", "04-23", "05-19", "07-15", "08-30", "10-29"];
    if (ozelGunler.includes(ayGun)) {
      alert("Resmi tatil günlerinde randevu alınamaz.");
      return;
    }

    // Her şey yolundaysa
    alert(`Randevunuz Başarıyla Alındı!\nDoktor: ${seciliDoktor}\nTarih: ${tarih}\nSaat: ${saat}`);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#1976d2', textAlign: 'center' }}>🏥 Hasta Randevu Sistemi</h1>
      <p style={{ textAlign: 'center' }}>Lütfen randevu bilgilerini doldurunuz.</p>
      
      <form onSubmit={randevuAl} style={formStili}>
        {/* Doktor Seçimi */}
        <label>Doktor Seçiniz:</label>
        <select 
          required 
          style={inputStili} 
          onChange={(e) => setSeciliDoktor(e.target.value)}
        >
          <option value="">Doktor Seçin...</option>
          {doktorlar.map(d => (
            <option key={d.id} value={d.ad}>{d.ad} ({d.poliklinik})</option>
          ))}
        </select>

        {/* Tarih Seçimi */}
        <label>Tarih Seçiniz:</label>
        <input 
          type="date" 
          required 
          min={bugun} // GEÇMİŞ TARİH YASAĞI: Bugünden öncesi seçilemez
          style={inputStili} 
          onChange={(e) => setTarih(e.target.value)}
        />

        {/* Saat Seçimi */}
        <label>Saat Seçiniz:</label>
        <select required style={inputStili} onChange={(e) => setSaat(e.target.value)}>
          <option value="">Saat Seçin...</option>
          <option value="09:00">09:00</option>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
        </select>

        <button type="submit" style={butonStili}>Randevuyu Tamamla</button>
      </form>
    </div>
  );
}

// Stiller
const formStili = { display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' };
const inputStili = { padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' };
const butonStili = { 
  padding: '15px', backgroundColor: '#1976d2', color: 'white', 
  border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' 
};