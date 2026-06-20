"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import Image from "next/image"
import { MouseEvent } from "react"

const team = [
  { 
    name: "Nguyễn Hà Gia Hưng", 
    role: "Lắp ráp - Thiết kế web - Thuyết minh",
    avatar: "/chỗ để ảnh" 
  },
  { 
    name: "Đinh Hoàng Khôi", 
    role: "Lập trình - Thiết kế web - Ý tưởng",
    avatar: "/b.png" 
  },
  { 
    name: "Nguyễn Huỳnh Tuấn Kiệt", 
    role: "Hỗ trợ kỹ thuật",
    avatar: "d.png" 
  },
  { 
    name: "Nguyễn Huy Thông", 
    role: "Thuyết minh",
    avatar: "" 
  },
]

export function TeamSection() {
  return (
    <section id="team" className="relative bg-slate-950/20 py-24 md:py-32 overflow-hidden">
      {/* Hiệu ứng đèn Neon định hình chiều sâu background */}
      <div className="pointer-events-none absolute right-1/4 top-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-blue-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/4 bottom-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        {/* ================= TIÊU ĐỀ SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]">
            Đội ngũ
          </span>
          <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-white md:text-5xl bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            Những người thực hiện dự án
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-md mx-auto">
            Một nhóm học sinh đam mê khoa học, công nghệ và phát triển năng lượng bền vững.
          </p>
        </motion.div>

        {/* ================= LƯỚI CARD THÀNH VIÊN ================= */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

// Sub-component xử lý hiệu ứng di chuột Spotlight cho từng Card
function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        boxShadow: "0 30px 60px rgba(0,0,0,0.6), 0 0 30px rgba(255,255,255,0.15)"
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40 p-8 text-center backdrop-blur-md transition-all duration-300 ease-out hover:border-white/40"
    >
      {/* Hiệu ứng Đèn Led chạy theo con trỏ chuột (Spotlight) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.12),
              transparent 80%
            )
          `,
        }}
      />

      {/* KHUNG CHỨA AVATAR (Có fallback tự động tránh lỗi ảnh trống) */}
      <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-md transition-all duration-500 group-hover:rotate-3 group-hover:scale-105 group-hover:border-white/30">
        {member.avatar ? (
          <Image
            src={member.avatar}
            alt={member.name}
            fill
            sizes="96px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority={index < 2}
          />
        ) : (
          /* Khung render ảnh mặc định nghệ thuật nếu đường dẫn trống */
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-slate-400 font-black text-2xl group-hover:from-slate-700 group-hover:to-slate-800 transition-colors duration-300">
            {member.name.split(" ").pop()?.charAt(0)}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
      </div>

      {/* TÊN THÀNH VIÊN */}
      <h3 className="mt-6 text-lg font-bold text-white tracking-wide transition-colors duration-300 group-hover:text-slate-200">
        {member.name}
      </h3>
      
      {/* VAI TRÒ / CHỨC VỤ */}
      <p className="mt-1.5 text-xs font-medium text-slate-400 tracking-wider transition-colors duration-300 group-hover:text-slate-300">
        {member.role}
      </p>

      {/* Vệt sáng laser tinh tế quét dưới đáy khi hover */}
      <div className="absolute bottom-0 inset-x-12 h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-50 opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100" />
    </motion.div>
  )
}