import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/lenis-provider"
import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Mô hình cảm biến ánh sáng Mặt Trời thông minh",
  description:
    "Tự động theo dõi ánh sáng để tối ưu khả năng hấp thụ năng lượng mặt trời. Dự án STEM ứng dụng Arduino, cảm biến LDR và động cơ servo.",
  keywords: ["năng lượng mặt trời", "solar tracker", "Arduino", "STEM", "cảm biến ánh sáng", "AI"],
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a2620",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="dark bg-background">
      <body className={`font-sans antialiased`}>
        {/* Lỗi nằm ở việc Navbar của bạn dùng 'fixed', nó nổi lên trên nội dung.
           Class 'pt-24' dưới đây tạo khoảng cách padding-top 
           để đẩy nội dung xuống dưới Navbar.
        */}
        <div className="pt-24">
          <LenisProvider>{children}</LenisProvider>
        </div>
        <Analytics />
      </body>
    </html>
  )
}