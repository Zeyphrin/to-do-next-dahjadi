import Link from "next/link";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-inner page-shell" aria-label="Navigasi utama">
        <Link href="/" className="brand" aria-label="Ruang Tugas, halaman utama">
          <span className="brand-mark">r.</span>
          <span>ruang<span className="brand-light">tugas</span></span>
        </Link>
        <div className="nav-actions">
          <Link href="/" className="nav-link">Daftar tugas</Link>
        </div>
      </nav>
    </header>
  );
}
