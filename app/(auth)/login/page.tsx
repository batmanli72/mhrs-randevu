"use client";

export default function LoginPage() {
  async function login(formData: FormData) {
    await fetch("/api/auth", {
      method: "POST",
      credentials: "include", // 🔥 EN KRİTİK SATIR
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    window.location.href = "/";
  }

  return (
    <form action={login}>
      <h2>Giriş Yap</h2>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Şifre" />
      <button>Giriş</button>
    </form>
  );
}
