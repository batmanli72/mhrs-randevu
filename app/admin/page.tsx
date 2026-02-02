"use client"; // Etkileşim (tıklama, yazma) olduğu için bunu eklemeliyiz
import { useState } from 'react';

export default function AdminPaneli() {
  // Veri setlerimiz (Gerçek uygulamada bunlar veritabanından gelir)
  const [poliklinikler, setPoliklinikler] = useState(["Dahiliye", "Göz", "Kardiyoloji"]);
  const [doktorlar, setDoktorlar] = useState([
    { id: 1, ad: "Ahmet Yılmaz", poliklinik: "Dahiliye" }
  ]);

  // Yeni eklemeler için geçici input state'leri
  const [yeniPol, setYeniPol] = useState("");
  const [yeniDoktorAd, setYeniDoktorAd] = useState("");
  const [seciliPol, setSeciliPol] = useState("Dahiliye");

  // --- POLİKLİNİK FONKSİYONLARI ---
  const poliklinikEkle = () => {
    if (yeniPol) {
      setPoliklinikler([...poliklinikler, yeniPol]);
      setYeniPol("");
    }
  };

  const poliklinikSil = (isim) => {
    setPoliklinikler(poliklinikler.filter(p => p !== isim));
  };

  // --- DOKTOR FONKSİYONLARI ---
  const doktorEkle = () => {
    if (yeniDoktorAd) {
      const yeniDoktor = { id: Date.now(), ad: yeniDoktorAd, poliklinik: seciliPol };
      setDoktorlar([...doktorlar, yeniDoktor]);
      setYeniDoktorAd("");
    }
  };

  const doktorSil = (id) => {
    setDoktorlar(doktorlar.filter(d => d.id !== id));
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#d32f2f' }}>⚙️ MHRS Yönetim Paneli</h1>
      <hr />

      {/* POLİKLİNİK YÖNETİMİ */}
      <section style={{ marginTop: '30px' }}>
        <h2>🏥 Poliklinik Yönetimi</h2>
        <input 
          value={yeniPol} 
          onChange={(e) => setYeniPol(e.target.value)}
          placeholder="Poliklinik adı..." 
          style={inputStili}
        />
        <button onClick={poliklinikEkle} style={ekleButonStili}>Ekle</button>
        
        <ul style={{ marginTop: '10px' }}>
          {poliklinikler.map((p, index) => (
            <li key={index} style={listeElemaniStili}>
              {p} <button onClick={() => poliklinikSil(p)} style={silButonStili}>Sil</button>
            </li>
          ))}
        </ul>
      </section>

      <hr />

      {/* DOKTOR YÖNETİMİ */}
      <section style={{ marginTop: '30px' }}>
        <h2>👨‍⚕️ Doktor Yönetimi</h2>
        <input 
          value={yeniDoktorAd} 
          onChange={(e) => setYeniDoktorAd(e.target.value)}
          placeholder="Doktor adı soyadı..." 
          style={inputStili}
        />
        <select value={seciliPol} onChange={(e) => setSeciliPol(e.target.value)} style={inputStili}>
          {poliklinikler.map((p, index) => <option key={index} value={p}>{p}</option>)}
        </select>
        <button onClick={doktorEkle} style={ekleButonStili}>Doktor Ekle</button>

        <ul style={{ marginTop: '10px' }}>
          {doktorlar.map((d) => (
            <li key={d.id} style={listeElemaniStili}>
              <strong>{d.ad}</strong> - {d.poliklinik} 
              <button onClick={() => doktorSil(d.id)} style={silButonStili}>Sil</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

// Basit Stiller
const inputStili = { padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' };
const ekleButonStili = { padding: '8px 15px', backgroundColor: '#2e7d32', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' };
const silButonStili = { marginLeft: '10px', backgroundColor: '#f44336', color: 'white', border: 'none', padding: '3px 8px', borderRadius: '3px', cursor: 'pointer' };
const listeElemaniStili = { marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px', listStyle: 'none' };