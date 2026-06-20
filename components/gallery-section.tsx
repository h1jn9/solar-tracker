"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-slate-950/10 py-24 md:py-32"
    >
      {/* Glow Background */}
      <div className="pointer-events-none absolute left-1/3 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-slate-500/5 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* ================= TITLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Thư viện
          </span>

          {/* Đã thêm font-sans để sửa lỗi hiển thị dấu nặng */}
          <h2 className="mt-4 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-3xl font-black tracking-tight text-transparent md:text-5xl font-sans">
            Hình ảnh & Video thực tế
          </h2>
        </motion.div>

        {/* ================= GALLERY ================= */}
        <div className="mb-20 grid grid-cols-1 gap-4 md:grid-cols-4">
          
          {/* Ảnh lớn (Chiếm 2 cột) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group relative h-[450px] overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40 md:col-span-2"
          >
            <Image src="/solar-tracker-hero.png" alt="Mô hình hoàn chỉnh" fill className="object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            <span className="absolute bottom-4 left-4 translate-y-2 text-xs font-semibold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              Mô hình hoàn chỉnh
            </span>
          </motion.div>

          {/* Cột ảnh nhỏ */}
          <div className="flex flex-col gap-4">
            <motion.div whileHover={{ y: -5 }} className="group relative h-[217px] overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
              <Image src="/gallery-circuit.png" alt="Quạt mini" fill className="object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 translate-y-2 text-xs font-semibold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                Quạt mini tích hợp LED
              </span>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="group relative h-[217px] overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
              <Image src="/gallery-prototype.png" alt="Cận cảnh" fill className="object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 translate-y-2 text-xs font-semibold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                Cận cảnh servo và cảm biến
              </span>
            </motion.div>
          </div>

          {/* Ảnh cuối */}
          <motion.div whileHover={{ y: -5 }} className="group relative h-full min-h-[450px] overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
            <Image src="/gallery-field.png" alt="Mạch điện" fill className="object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            <span className="absolute bottom-4 left-4 translate-y-2 text-xs font-semibold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              Mạch điện và Arduino
            </span>
          </motion.div>
        </div>

        {/* ================= VIDEO ================= */}
        <motion.a
          href="https://limewire.com/d/oqnJ7#DK53YOYkJv"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            y: -5,
            boxShadow: "0 30px 60px rgba(0,0,0,0.6), 0 0 35px rgba(255,255,255,0.15)",
          }}
          className="group relative mx-auto block max-w-5xl overflow-hidden rounded-2xl border border-white/5 bg-slate-900/30 p-2.5 backdrop-blur-md transition-all duration-300 hover:border-white/20"
        >
          <div className="relative aspect-video overflow-hidden rounded-xl bg-black flex items-center justify-center">
            {/* Bạn có thể thay div này bằng component VideoThumbnail nếu có */}
            <div className="text-slate-500 text-sm">Nhấp để xem Video vận hành</div>
            
            <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-2 rounded-md border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              VIDEO VẬN HÀNH MÔ HÌNH
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  )
}