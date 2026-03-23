import './globals.css'

export const metadata = {
  title: 'Jewellery Store',
  description: 'Premium Jewellery Store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
