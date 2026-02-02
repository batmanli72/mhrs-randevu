"use client";
import { useState } from 'react';

export default function DoktorPaneli() {
  // Örnek randevu verileri (Normalde veritabanından gelir)
  const [randevular, setRandevular] = useState([
    { id: 101, hastaAdi: "Ayşe Fatma", tarih: "2023-11-25", saat: "10:30", durum: "Beklemede" },
    { id: 102, hastaAdi: "Mehmet Öz", tarih: "2023-11-25", saat: "11:15", durum: "Beklemede" },
  ]);

  // Randevuyu Onayla
  const randevuOnayla = (id) => {
    setRandevular(randevular.map(r => 
      r.id === id ? { ...r, durum: "Onaylandı" } : r
    ));
    alert("Randevu başarıyla onaylandı.");
  };

  // Randevuyu Sil/İptal Et
  const randevuSil = (id) => {
    if (confirm("Bu randevuyu silmek istediğinize emin misiniz?")) {
      setRandevular(randevular.filter(r => r.id !== id));
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#1976d2' }}>👨‍⚕️ Doktor Randevu Yönetimi</h1>
      <p>Size gelen randevu taleplerini buradan yönetebilirsiniz.</p>
      <hr />

      <div style={{ marginTop: '20px' }}>
        <h2>Gelen Randevu Talepleri</h2>
        {randevular.length === 0 ? (
          <p>Şu an bekleyen randevunuz bulunmamaktadır.</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f5f5f5', textAlign: 'left' }}>
                <th style={hucreStili}>Hasta Adı</th>
                <th style={hucreStili}>Tarih</th>
                <th style={hucreStili}>Saat</th>
                <th style={hucreStili}>Durum</th>
                <th style={hucreStili}>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {randevular.map((r) => (
                <tr key={r.id} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={hucreStili}>{r.hastaAdi}</td>
                  <td style={hucreStili}>{r.tarih}</td>
                  <td style={hucreStili}>{r.saat}</td>
                  <td style={{ ...hucreStili, fontWeight: 'bold', color: r.durum === 'Onaylandı' ? 'green' : 'orange' }}>
                    {r.durum}
                  </td>
                  <td style={hucreStili}>
                    {r.durum === "Beklemede" && (
                      <button onClick={() => randevuOnayla(r.id)} style={onayButonStili}>
                        Onayla
                      </button>
                    )}
                    <button onClick={() => randevuSil(r.id)} style={silButonStili}>
                      Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

// Görsel Stiller
const hucreStili = { padding: '12px', borderBottom: '1px solid #eee' };
const onayButonStili = { 
  backgroundColor: '#2e7d32', color: 'white', border: 'none', 
  padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', marginRight: '5px' 
};
const silButonStili = { 
  backgroundColor: '#d32f2f', color: 'white', border: 'none', 
  padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' 
};