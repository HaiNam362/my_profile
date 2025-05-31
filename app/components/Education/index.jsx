import { GraduationCap, Calendar, Award } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Cử nhân Kỹ thuật Phần mềm",
      school: "Đại học Công nghệ Thông tin - ĐHQG TP.HCM",
      duration: "2017 - 2021",
      gpa: "3.6/4.0",
      achievements: [
        "Tốt nghiệp loại Khá",
        "Đồ án tốt nghiệp: Ứng dụng quản lý học tập với React Native",
        "Tham gia CLB Lập trình và nhiều cuộc thi Hackathon",
      ],
    },
  ]

  const certifications = [
    {
      name: "React Native Certified Developer",
      issuer: "Meta",
      year: "2022",
    },
    {
      name: "Flutter Development Bootcamp",
      issuer: "Google",
      year: "2021",
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2023",
    },
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Học vấn</h2>
          <p className="text-xl text-gray-600">Bằng cấp và chứng chỉ</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="text-blue-600" size={28} />
              Bằng cấp
            </h3>

            {education.map((edu, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h4>
                <h5 className="text-lg text-blue-600 font-medium mb-3">{edu.school}</h5>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {edu.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Award size={16} />
                    GPA: {edu.gpa}
                  </div>
                </div>

                <div>
                  <h6 className="font-medium mb-2">Thành tích:</h6>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-sm">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="text-green-600" size={28} />
              Chứng chỉ
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                  <p className="text-green-600 font-medium">{cert.issuer}</p>
                  <p className="text-sm text-gray-600">{cert.year}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-3">Học tập liên tục</h4>
              <p className="text-gray-600 text-sm">
                Tôi luôn cập nhật kiến thức mới thông qua các khóa học online, tham gia cộng đồng developer và đọc tài
                liệu kỹ thuật để nâng cao kỹ năng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
