import Link from 'next/link';

export default function AnaSayfa() {
  return (
    <main className="ana-konteyner" style={{ textAlign: 'center', padding: '50px' }}>
      <h1>MHRS Randevu Sistemi</h1>
      <p>Lütfen devam etmek için giriş tipinizi seçiniz:</p>

      <div className="giris-secenekleri" style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
        
        {/* Kullanıcı (Hasta) Girişi */}
        <Link href="/user">
          <button style={butonStili}>
            👤 Hasta Girişi
          </button>
        </Link>

        {/* Doktor Girişi */}
        <Link href="/doctor">
          <button style={butonStili}>
            👨‍⚕️ Doktor Girişi
          </button>
        </Link>

        {/* Admin Girişi */}
        <Link href="/admin">
          <button style={{ ...butonStili, backgroundColor: '#d32f2f' }}>
            ⚙️ Admin Girişi
          </button>
        </Link>

      </div>
    </main>
  );
}

const butonStili = {
  padding: '15px 30px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#1976d2',
  color: 'white',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
};