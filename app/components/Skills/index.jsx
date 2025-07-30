"use client"

import React from "react"
import { Code, Smartphone, Database, Settings, Users, CheckCircle } from "lucide-react"
import Reveal from "@/app/Reveal"

export default function Skills() {
  const skillCategories = [
    {
      title: "Kỹ năng chuyên môn",
      icon: <Code size={32} />,
      skills: [
        "Có kinh nghiệm làm việc với native Android và iOS.",
        "Có kinh nghiệm và kiến thức cơ bản phát triển React Native như State, Props, Component, Networking.",
        "Có kinh nghiệm về kết nối API, có kiến thức về RESTful API.",
        "Có kinh nghiệm với testing và Build App lên store.",
        "Sử dụng thành thạo Git và có kinh nghiệm làm việc với FireBase, Notification, OneSignal, Google Maps.",
        "Tích hợp SDK thanh toán, chat...",
        "Update version React Native từ 0.68.4 lên 0.73.5.",
      ],
    },
    {
      title: "Kỹ năng mềm",
      icon: <Users size={32} />,
      skills: [
        "Kỹ năng giao tiếp và thuyết trình.",
        "Có kỹ năng làm việc nhóm và độc lập.",
        "Có trách nhiệm trong công việc.",
        "Phân tích logic và giải quyết vấn đề.",
        "Đọc hiểu tiếng Anh.",
      ],
    },
  ]

  return (
    <Reveal>
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kỹ năng chuyên môn</h2>
            <p className="text-xl text-gray-600">Các công nghệ, công cụ và kỹ năng tôi sở hữu</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  )
}