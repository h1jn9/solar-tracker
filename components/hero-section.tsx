"use client"

import { motion } from "framer-motion"
import { Sun, ArrowDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* ambient gradient glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-[#ffd93d]/15 blur-[150px]" />
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-[420px] w-[420px] rounded-full bg-[#6eeb83]/12 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -left-32 h-[420px] w-[420px] rounded-full bg-[#4a90e2]/12 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <Sun className="h-3.5 w-3.5 text-[#ffd93d]" />
            Dự án STEM · Năng lượng sạch
          </motion.div>

          {/* Thay đổi: Áp dụng dải màu gradient chuẩn Apple cho chữ Mặt Trời và thông minh */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl"
          >
            Mô hình cảm biến
            <br />
            ánh sáng
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-green-400 bg-clip-text text-transparent">
              Mặt Trời
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
              thông minh
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-pretty text-base md:text-lg leading-relaxed text-muted-foreground"
          >
            Mô hình cảm biến ánh sáng Mặt Trời thông minh được xây dựng nhằm minh họa nguyên lý tận dụng năng lượng mặt trời hiệu quả hơn. Hệ thống sử dụng cảm biến ánh sáng kết hợp với Arduino để tự động điều chỉnh tấm pin theo hướng có ánh sáng mạnh nhất, góp phần nâng cao hiệu suất hấp thụ năng lượng.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#how"
              className="brand-gradient-bg rounded-full px-7 py-3.5 text-sm font-semibold text-night transition-transform hover:scale-105"
            >
              Nguyên lý hoạt động
            </a>
            <a
              href="#team"
              className="glass rounded-full px-7 py-3.5 text-sm font-medium text-foreground transition-transform hover:scale-105"
            >
              Đội ngũ
            </a>
          </motion.div>
        </div>

        {/* Product image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(255,217,61,0.18),rgba(110,235,131,0.18),rgba(74,144,226,0.18),transparent)]" />
          <div className="glass animate-float relative mx-auto aspect-square w-full max-w-lg overflow-hidden rounded-3xl">
            <Image
              src="/solar-tracker-hero.png"
              alt="Mô hình cảm biến ánh sáng mặt trời thông minh"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 512px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#problem"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 1.8, repeat: Number.POSITIVE_INFINITY } }}
        className="mx-auto mt-16 flex w-fit flex-col items-center gap-2 text-xs text-muted-foreground"
      >
        Cuộn để khám phá
        <ArrowDown className="h-4 w-4" />
      </motion.a>
    </section>
  )
}