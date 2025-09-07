import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export const metadata = { title: 'Dr. Ashim Aryan - Ayurvedic Consultations' }
export default function RootLayout({ children }){
  return (
    <html lang='en'>
      <body className='min-h-screen flex flex-col'>
        <Navbar />
        <main className='flex-1 max-w-5xl w-full mx-auto p-6'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
