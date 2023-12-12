import Footer from './components/footer/footer'
import NavBar from './components/navBar/navBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nike.Just Do It. Nike.com',
  description: 'Developed by omer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
