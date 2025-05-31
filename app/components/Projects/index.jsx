"use client"

import { ExternalLink, Github, Briefcase } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Xlooca",
      period: "04/2024 - Hiện tại",
      client: "Doanh nghiệp tham gia hiệp hội du lịch Hải Phòng, Quảng Ninh và Hà Nội",
      teamSize: 8,
      role: "Lập trình viên Mobile App",
      responsibilities: [
        "Phát triển chức năng mới.",
        "Update version React Native từ 0.68.4 lên 0.73.5.",
        "Tích hợp SDK thanh toán máy POS của NextPay cho booking doanh nghiệp du lịch.",
        "Tích hợp SDK chat của Communi.",
        "Build app lên store.",
      ],
      technologies: ["NextPay POS", "Communi Chat"],
    },
    {
      title: "VitaGoX",
      period: "04/2024 - Hiện tại",
      client: "Sở và hiệp hội du lịch Hà Nội, Hải Phòng và Quảng Ninh",
      teamSize: 8,
      role: "Lập trình viên Mobile App",
      responsibilities: [
        "Phát triển chức năng mới.",
        "Update version React Native từ 0.68.4 lên 0.73.5.",
        "Tích hợp SDK chat của Communi.",
        "Build app lên store.",
      ],
      technologies: ["Communi Chat"],
    },
    {
      title: "iTourismDX",
      period: "05/2024 - Hiện tại",
      client: "Sở và hiệp hội du lịch Hà Nội, Hải Phòng và Quảng Ninh",
      teamSize: 8,
      role: "Lập trình viên Mobile App",
      responsibilities: [
        "Phát triển chức năng mới.",
        "Update version React Native từ 0.68.4 lên 0.73.5.",
        "Tích hợp SDK chat của Communi.",
        "Build app lên store.",
      ],
      technologies: ["Communi Chat"],
    },
    {
      title: "iLooca",
      period: "06/2024 - Hiện tại",
      client: "Người dùng đặt booking tour du lịch của sở du lịch",
      teamSize: 8,
      role: "Lập trình viên Mobile App",
      responsibilities: [
        "Phát triển chức năng mới.",
        "Tích hợp SDK chat Communi.",
        "Build app lên store.",
        "Tích hợp SDK VietQR và OnePay thanh toán vé du lịch.",
      ],
      technologies: ["Communi Chat", "VietQR", "OnePay"],
    },
    {
      title: "OneGuide",
      period: "06/2024 - Hiện tại",
      client: "Hướng dẫn viên của Hiệp hội du lịch Hải Phòng và Quảng Ninh",
      teamSize: 8,
      role: "Lập trình viên Mobile",
      responsibilities: [
        "Phát triển chức năng mới.",
        "Build app lên store.",
        "Update version React Native từ 0.68.4 lên 0.73.5.",
        "Tích hợp chat Communi và thanh toán VietQR, OnePay.",
      ],
      technologies: ["Communi Chat", "VietQR", "OnePay"],
    },
    {
      title: "SnapFans",
      period: "12/2023 - 02/2024",
      client: "Công ty TNHH GreenifyVN",
      teamSize: 5,
      role: "Lập trình viên React Native",
      responsibilities: [
        "Phát triển ứng dụng theo yêu cầu của công ty.",
        "Xử lý lỗi và debug của ứng dụng.",
        "Tối ưu hiệu năng của update video 4K camera.",
      ],
      technologies: ["Firebase", "Socket", "Camera"],
    },
    {
      title: "Ellev8",
      period: "12/2023 - 02/2024",
      client: "Công ty TNHH GreenifyVN",
      teamSize: 5,
      role: "Lập trình viên React Native",
      responsibilities: [
        "Phát triển ứng dụng theo yêu cầu của công ty.",
        "Xử lý lỗi và debug của ứng dụng.",
      ],
      technologies: ["Firebase", "Chat", "Socket"],
    },
    {
      title: "MocChauTour",
      period: "2022 - Hiện tại",
      client: "Huyện Mộc Châu",
      teamSize: 8,
      role: "Lập trình viên React Native",
      responsibilities: [
        "Duy trì và phát triển ứng dụng theo yêu cầu khách hàng.",
        "Tối ưu hiệu suất của ứng dụng.",
        "Nghiên cứu kỹ thuật và xử lý lỗi.",
      ],
      technologies: ["Firebase", "MapBox", "React Native", "App Center", "Git", "BingMaps", "Socket", "Redux Saga", "FCM", "Notification"],
    },
    {
      title: "Sgolf",
      period: "2022 - Hiện tại",
      client: "Công ty Cổ phần Đầu tư Sgolf",
      teamSize: 10,
      role: "Lập trình viên React Native",
      responsibilities: [
        "Phát triển ứng dụng theo yêu cầu của leader và phòng marketing.",
        "Xử lý lỗi và tối ưu hiệu năng của ứng dụng.",
      ],
      technologies: ["Firebase", "Google Maps", "React Native", "App Center", "Git", "Redux Saga", "FCM", "Notification", "Socket"],
    },
    {
      title: "Ihouzz",
      period: "06/2022 - 12/2022",
      client: "Công ty Cổ phần Công nghệ Ihouzz",
      teamSize: 10,
      role: "Lập trình viên React Native",
      responsibilities: [
        "Phát triển ứng dụng theo yêu cầu của khách hàng.",
        "Xử lý lỗi của ứng dụng.",
        "Tối ưu hiệu năng của ứng dụng.",
      ],
      technologies: ["Firebase", "Google Maps", "Stringee Call", "OneSignal", "Chat", "Testing", "Socket"],
    },
    {
      title: "Ihouzz-Agent",
      period: "06/2022 - 12/2022",
      client: "Công ty Cổ phần Công nghệ Ihouzz",
      teamSize: 10,
      role: "Lập trình viên React Native",
      responsibilities: [
        "Phát triển ứng dụng theo yêu cầu của khách hàng.",
        "Xử lý lỗi của ứng dụng.",
        "Tối ưu hiệu năng của ứng dụng.",
      ],
      technologies: ["Firebase", "Google Maps", "Stringee Call", "OneSignal", "Chat", "Testing", "Socket"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Dự án</h2>
          <p className="text-xl text-gray-600">Các dự án tiêu biểu tôi đã tham gia</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase size={20} className="text-blue-600" />
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-sm text-gray-500 mb-2">{project.period}</p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Khách hàng:</span> {project.client}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-medium">Số lượng người tham gia:</span> {project.teamSize} người
                </p>
                <p className="text-sm text-blue-600 mb-4">Vai trò: {project.role}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Nhiệm vụ:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {project.responsibilities.map((task, taskIndex) => (
                      <li key={taskIndex}>{task}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  <h4 className="text-sm font-semibold text-gray-700 w-full">Công nghệ sử dụng:</h4>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}