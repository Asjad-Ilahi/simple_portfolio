import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import { Toaster } from "react-hot-toast"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Asjad Ilahi",
  description: "Professional portfolio showcasing skills and projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
        </div>
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}

