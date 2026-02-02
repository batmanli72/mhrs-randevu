export default function AnaSayfa() {
  return (
    <main className="ana-konteyner" style={{ textAlign: 'center', padding: '50px' }}>
      <h1>MHRS Randevu Sistemi</h1>
      <p>Lütfen devam etmek için giriş tipinizi seçiniz:</p>

      <div className="giris-secenekleri" style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
        
        {/* Kullanıcı Girişi - Vatandaşlar için */}
        <button style={butonStili}>
          👤 Hasta Girişi
        </button>

        {/* Doktor Girişi - Hekimler için */}
        <button style={butonStili}>
          👨‍⚕️ Doktor Girişi
        </button>

        {/* Admin Girişi - Sistem yönetimi için */}
        <button style={{ ...butonStili, backgroundColor: '#d32f2f' }}>
          ⚙️ Admin Girişi
        </button>

      </div>
    </main>
  );
}

// Butonlar için ortak basit bir stil objesi
const butonStili = {
  padding: '15px 30px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#1976d2',
  color: 'white',
  fontWeight: 'bold'
};