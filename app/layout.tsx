import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Triangle Tracking - Professional GPS Tracking for Private Investigators',
  description: 'Enhance your investigative capabilities with our high-quality tracking devices and services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 w-full bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <Image 
                  src="/your-logo-filename.png" // Replace with your actual filename
                  alt="Triangle Tracking Logo" 
                  width={50} 
                  height={50}
                  className="h-12 w-auto" 
                />
                <span className="text-2xl font-bold text-[#ff6600] md:hidden lg:inline">Triangle Tracking</span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/about" className="text-gray-600 hover:text-[#ff6600]">About</Link>
                <Link href="/features" className="text-gray-600 hover:text-[#ff6600]">Features</Link>
                <Link href="/pricing" className="text-gray-600 hover:text-[#ff6600]">Pricing</Link>
                <Link href="/contact" className="text-gray-600 hover:text-[#ff6600]">Contact</Link>
              </nav>
              <Button asChild className="bg-[#ff6600] text-white hover:bg-[#ff6600]/90">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0 flex items-center">
        <Image 
          src="/your-logo-filename.png" // Replace with your actual filename
          alt="Triangle Tracking Logo" 
          width={40} 
          height={40}
          className="h-10 w-auto mr-2" 
        />
        <p>© 2023 Triangle Tracking. All rights reserved.</p>
      </div>
      <nav className="flex space-x-4">
        <Link href="/privacy" className="hover:text-[#ff6600]">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-[#ff6600]">Terms of Service</Link>
        <Link href="/contact" className="hover:text-[#ff6600]">Contact Us</Link>
      </nav>
    </div>
  </div>
</footer>
        </div>
      </body>
    </html>
  )
}

