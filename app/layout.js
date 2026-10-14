import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Ruang Tugas — Satu hal dalam satu waktu",
  description: "Ruang yang tenang untuk merencanakan dan menyelesaikan tugasmu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
