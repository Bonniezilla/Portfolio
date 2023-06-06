import './globals.css';

export const metadata = {
  title: "Bonnie's Portfolio",
  description: 'My Profissional Portfolio.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-800">{children}</body>
    </html>
  )
}
