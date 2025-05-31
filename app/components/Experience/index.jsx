import { Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      company: "Công ty Cổ phần Việt ISO",
      position: "Lập trình viên Mobile App",
      duration: "04/2024 - Hiện tại",
      location: "Việt Nam",
      description: [
        "Phát triển chức năng hệ thống sinh thái app về du lịch chuyển đổi số",
        "Tích hợp SDK Nextpay, Communi, VietQR, OnePay",
        "Build app và submit app lên store",
        "Update version React Native của hệ thống từ 0.68 lên 0.73"
      ],
    },
    {
      company: "Freelancer & GreenifyVn",
      position: "Lập trình viên React Native",
      duration: "12/2023 - 02/2024",
      location: "Remote",
      description: [
        "Làm việc freelancer cho khách hàng nước ngoài sử dụng React Native",
        "Phát triển ứng dụng cho công ty GreenifyVn"
      ],
    },
    {
      company: "Công ty Cổ phần IGB Group",
      position: "Lập trình viên React Native",
      duration: "01/2022 - 12/2023",
      location: "Việt Nam",
      description: [
        "Tham gia các dự án lớn về outsource và product",
        "Phát triển ứng dụng với React Native, ReactJs, Flutter",
        "Nâng cao hiểu biết về các công nghệ mobile"
      ],
    },
    {
      company: "VMO Holdings",
      position: "Fresher NodeJS",
      duration: "06/2021 - 12/2021",
      location: "Việt Nam",
      description: [
        "Làm việc với NodeJS, Express, MongoDB và MySQL",
        "Tham gia phát triển các dự án backend"
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Kinh nghiệm làm việc</h2>
          <p className="text-xl text-gray-600">Lịch sử công việc và thành tích</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-200"></div>

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1.5"></div>

              <div className="bg-white p-6 rounded-lg shadow-lg ml-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                    <h4 className="text-lg text-blue-600 font-medium">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-gray-500 mt-2 md:mt-0">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}