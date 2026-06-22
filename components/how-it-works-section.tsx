"use client";
import { motion } from "framer-motion";
import { Eye, Cpu, RefreshCw, Sun, Battery, Fan } from "lucide-react";

// Sắp xếp lại thứ tự mảng 1 -> 6
const steps = [
  { id: "01", icon: Eye, title: "Cảm biến LDR", desc: "Đo cường độ ánh sáng từ nhiều hướng khác nhau." },
  { id: "02", icon: Cpu, title: "Arduino Uno", desc: "Xử lý dữ liệu từ cảm biến và đưa ra quyết định." },
  { id: "03", icon: RefreshCw, title: "Servo Motor", desc: "Điều chỉnh góc quay của tấm pin mặt trời." },
  { id: "04", icon: Sun, title: "Tấm pin hấp thụ", desc: "Tự động hướng về nơi có ánh sáng mạnh nhất." },
  { id: "05", icon: Battery, title: "Lưu trữ năng lượng", desc: "Điện năng được lưu trữ trong pin." },
  { id: "06", icon: Fan, title: "Thiết bị hoạt động", desc: "Quạt mini và đèn LED được cấp nguồn." },
];

export function HowItWorksSection() {
  return (
    <section id="how" className="relative py-24 bg-[#020b0f] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-xs font-bold mb-3">HOẠT ĐỘNG</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Quy trình hoạt động</h2>
          <p className="max-w-2xl text-lg text-gray-400">Hệ thống tự động theo dõi nguồn sáng, xoay tấm pin và tạo ra điện năng cho các thiết bị.</p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-x-16 gap-y-16">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative rounded-2xl border border-cyan-500/10 bg-[#07111c] p-6 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08)_0%,transparent_70%)] pointer-events-none" />

                {/* Number */}
                <div className="absolute top-4 right-4 text-4xl font-black text-cyan-400/5 select-none transition-colors duration-300 group-hover:text-cyan-400/15">{step.id}</div>

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-500/10 border border-cyan-400/15 mb-4 transition-all duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                  <Icon className="w-6 h-6 text-cyan-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:text-slate-950" />
                </div>

                {/* Title & Desc */}
                <h3 className="relative z-10 text-lg font-bold text-white mb-2 transition-colors duration-300 group-hover:text-cyan-300">{step.title}</h3>
                <p className="relative z-10 text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">{step.desc}</p>
                
                {/* Mũi tên đã được xóa bỏ */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}