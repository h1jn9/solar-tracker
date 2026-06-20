"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const tech = [
  { 
    name: "Arduino Uno", 
    desc: "Bộ vi điều khiển trung tâm xử lý logic và điều khiển toàn bộ hệ thống cảm biến, động cơ.",
    imgSrc: "/arduino.png"
  },
  { 
    name: "4 cảm biến LDR", 
    desc: "Đo cường độ ánh sáng theo 4 hướng khác nhau giúp xác định tọa độ mặt trời một cách chính xác.",
    imgSrc: "/ldr.png"
  },
  { 
    name: "2 động cơ Servo", 
    desc: "Xoay tấm pin theo 2 trục (ngang/dọc) tối ưu góc đón ánh sáng dựa trên dữ liệu vi điều khiển.",
    imgSrc: "/servo.png"
  },
  { 
    name: "Tấm pin mini", 
    desc: "Chuyển hóa quang năng từ ánh sáng Mặt Trời thành điện năng cung cấp hiệu quả cho hệ thống.",
    imgSrc: "/solar-panel.png"
  },
  { 
    name: "2 Pin 18650", 
    desc: "Lưu trữ điện năng năng lượng mặt trời, có thể nạp xả nhiều lần đảm bảo duy trì nguồn điện ổn định.",
    imgSrc: "/battery-18650.png"
  },
  { 
    name: "Module TP5100", 
    desc: "Mạch quản lý sạc pin lithium chuyên dụng an toàn với hiệu suất chuyển đổi dòng điện cao.",
    imgSrc: "/tp5100.png"
  },
]

export function TechnologiesSection() {
  return (
    <section id="tech" className="relative py-24 md:py-32 overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[160px]" />
      
      <div className="mx-auto max-w-7xl px-5 md:px-8 relative z-10">
        {/* FIX CHỮ: Mở rộng max-w-3xl để tiêu đề trải đều đẹp, không bị ngắt hàng tùy tiện */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-bold uppercase tracking-[4px] text-blue-400">Công nghệ</span>
          {/* FIX CHỮ: Điều chỉnh lại font-bold tracking-tight mượt hơn, tiệm cận style của phần Hero */}
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white md:text-5xl bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Phần cứng đứng sau hệ thống
          </h2>
          <p className="mt-4 text-pretty text-sm md:text-base leading-relaxed text-zinc-400 max-w-2xl">
            Mỗi linh kiện được lựa chọn để đảm bảo độ tin cậy, chi phí hợp lý và dễ dàng tái tạo cho mục đích học tập.
          </p>
        </motion.div>

        {/* Lưới hiển thị 1 hàng 2 ô lớn diện tích rộng rãi */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {tech.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.1 }}
              className="group relative flex flex-col sm:flex-row items-center gap-8 rounded-3xl p-[2px] min-h-[260px] overflow-hidden transition-all duration-300 select-none bg-slate-900/40"
            >
              {/* KHỐI LED CHẠY VÒNG QUANH KHI HOVER */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-3xl">
                <div className="absolute top-1/2 left-1/2 h-[300%] w-[300%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_40%,#3b82f6_70%,#60a5fa_90%,transparent_100%)]" />
              </div>

              {/* LỚP NỀN NỘI DUNG NỔI LÊN TRÊN */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8 rounded-[22px] bg-slate-950/90 backdrop-blur-xl p-8 md:p-10 w-full h-full min-h-[256px]">
                
                {/* Đổ màu nền phát sáng nhẹ bên trong khi hover */}
                <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100 bg-gradient-to-br from-blue-600/10 via-sky-500/5 to-transparent rounded-[22px] pointer-events-none" />

                {/* Hộp chứa ảnh linh kiện thật */}
                <div className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl border border-blue-500/10 bg-blue-950/20 transition-all duration-500 group-hover:border-blue-500/30 group-hover:bg-blue-600/10 overflow-hidden shadow-inner">
                  <Image 
                    src={t.imgSrc} 
                    alt={t.name}
                    fill
                    priority={i < 2}
                    sizes="128px"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>

                {/* Phần văn bản của từng ô linh kiện */}
                <div className="flex-1 text-center sm:text-left relative z-20">
                  <h3 className="text-xl font-bold text-white tracking-tight transition-colors group-hover:text-blue-300">
                    {t.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    {t.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}