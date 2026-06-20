"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// 🌟 ĐIỀN TÊN FILE VIDEO CỦA BẠN TẠI ĐÂY:
const VIDEO_FILENAME = "project-demo.mp4" 

const images = [
  { src: "/solar-tracker-hero.png", alt: "Mô hình hoàn chỉnh", className: "md:col-span-2 md:row-span-2" },
  { src: "/gallery-circuit.png", alt: "Mạch điện và Arduino", className: "" },
  { src: "/gallery-prototype.png", alt: "Cận cảnh servo và cảm biến", className: "" },
  { src: "/gallery-field.png", alt: "Tấm pin hướng về Mặt Trời", className: "md:col-span-2" },
]

export function GallerySection() {
  return (
    <section id="gallery" className="relative bg-slate-950/10 py-24 md:py-32 overflow-hidden">
      {/* Đốm sáng công nghệ chạy ngầm phía sau */}
      <div className="pointer-events-none absolute left-1/3 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-slate-500/5 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        {/* ================= TIÊU ĐỀ SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]">
            Thư viện
          </span>
          <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-white md:text-5xl bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            Hình ảnh & Video thực tế
          </h2>
        </motion.div>


        {/* ================= KHU VỰC 1: LƯỚI HÌNH ẢNH DỰ ÁN (ĐƯA LÊN TRƯỚC) ================= */}
        <div className="grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[220px] mb-16">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ 
                y: -6,
                boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 25px rgba(255,255,255,0.12)",
              }}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-md transition-all duration-300 ease-out hover:border-white/40 ${img.className}`}
            >
              <Image
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Lớp phủ Gradient tối mịn khi hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Chú thích ảnh đẩy nhẹ lên từ chân khung */}
              <span className="absolute bottom-4 left-4 text-xs font-semibold text-white tracking-wide opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                {img.alt}
              </span>
            </motion.div>
          ))}
        </div>


        {/* ================= KHU VỰC 2: VIDEO HOẠT ĐỘNG (ĐẨY XUỐNG SAU & TĂNG KÍCH THƯỚC) ================= */}
        <div className="pt-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 30px 60px rgba(0,0,0,0.6), 0 0 35px rgba(255,255,255,0.2)",
            }}
            // max-w-5xl giúp khung video to, rộng và hoành tráng hơn rất nhiều
            className="group relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/5 bg-slate-900/30 p-2.5 backdrop-blur-md transition-all duration-300 ease-out hover:border-white/40"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black shadow-inner">
              <video
                src={`/videos/${VIDEO_FILENAME}`} 
                controls
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-95 transition-opacity duration-300 group-hover:opacity-100"
              />
              
              {/* Nhãn hiệu ứng chấm đỏ nhấp nháy công nghệ */}
              <div className="pointer-events-none absolute top-5 left-5 flex items-center gap-2 rounded-md bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md border border-white/10 shadow-lg">
                <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                VIDEO MÔ PHỎNG VẬN HÀNH DỰ ÁN
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}