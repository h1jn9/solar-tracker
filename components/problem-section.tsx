"use client"

import { motion } from "framer-motion"
import { CloudSun, TrendingDown, Lightbulb } from "lucide-react"

const problems = [
  {
    icon: CloudSun,
    title: "Tấm pin cố định",
    desc: "Trong thực tế, nhiều hệ thống pin mặt trời được lắp đặt cố định nên không luôn hướng trực tiếp về phía Mặt Trời.",
    iconColor: "text-blue-400 bg-blue-500/10 border-blue-500/20"
  },
  {
    icon: TrendingDown,
    title: "Khả năng hấp thụ chưa tối ưu",
    desc: "Khi góc chiếu sáng thay đổi theo thời gian trong ngày, lượng ánh sáng tiếp nhận của tấm pin có thể giảm đáng kể.",
    iconColor: "text-rose-500 bg-rose-500/10 border-rose-500/20"
  },
  {
    icon: Lightbulb,
    title: "Cần giải pháp tự động",
    desc: "Một hệ thống có khả năng nhận biết hướng ánh sáng và tự điều chỉnh góc quay sẽ giúp mô phỏng việc khai thác năng lượng mặt trời hiệu quả hơn.",
    iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/20"
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-0 h-[350px] w-[350px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        {/* Khu vực tiêu đề */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#ffd93d]">
            Vấn đề
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white">
            Tại sao cần theo dõi ánh sáng?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-2xl">
            Trong thực tế, hướng chiếu sáng của Mặt Trời thay đổi liên tục trong ngày. Điều này đặt ra nhu cầu nghiên cứu các hệ thống có khả năng tự động điều chỉnh hướng tấm pin theo nguồn sáng.
          </p>
        </motion.div>

        {/* Danh sách các thẻ tính năng */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-md transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
            >
              {/* Khối chứa Icon */}
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl border ${p.iconColor} shadow-inner`}>
                <p.icon className="h-5 w-5 stroke-[2]" />
              </span>
              
              {/* ĐÃ SỬA: Tiêu đề luôn giữ màu trắng text-white cố định, không bị đổi màu khi rê chuột */}
              <h3 className="mt-5 text-lg font-bold text-white">
                {p.title}
              </h3>
              
              {/* Mô tả chi tiết */}
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}