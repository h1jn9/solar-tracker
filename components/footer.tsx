"use client"

import { Sun } from "lucide-react"

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-slate-950/50 py-8"
    >
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Logo bên trái */}
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-slate-950">
              <Sun className="h-4 w-4" />
            </span>
            <span className="text-sm font-bold text-white">
              SOLAR
              <span className="text-yellow-400">TRACKER</span>
            </span>
          </div>

          {/* Phần bản quyền: căn giữa bằng flex-1 và text-center */}
          <p className="flex-1 text-center text-xs text-slate-400">
            © 2026 THCS HÒA TÂN / 8A1.
          </p>

          {/* Phần bên phải */}
          <p className="text-xs text-slate-500 text-right">
            Sáng Tạo Thanh Thiếu Niên Nhi Đồng lần thứ 19
          </p>
          
        </div>
      </div>
    </footer>
  )
}